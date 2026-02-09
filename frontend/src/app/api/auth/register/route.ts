import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, pseudo, name, password } = body;

    if (!email || !pseudo || !name || !password) {
      return NextResponse.json(
        { status: 'error', message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pseudo, name, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { status: 'error', message: data.message || 'Erreur d\'inscription' },
        { status: response.status }
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
    console.error('Register API error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}