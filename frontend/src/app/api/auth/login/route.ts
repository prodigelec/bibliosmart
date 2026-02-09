import { NextRequest, NextResponse } from 'next/server';
import { api } from '../../services/client';  
  
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { status: 'error', message: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    const response = await api.post('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = response.data;

    if (response.status === 200) {
      return NextResponse.json(
        { status: 'success', message: 'Connexion réussie' },
        { status: 200 }
      );
    }

    // Créer une réponse avec le token dans un cookie HTTP-only
    const nextResponse = NextResponse.json(data);
    
    if (data.data?.token) {
      nextResponse.cookies.set('token', data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 jours
        path: '/',
      });
    }

    return nextResponse;
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}