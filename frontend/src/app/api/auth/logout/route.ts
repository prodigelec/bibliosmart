import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Supprimer le cookie du token
    const response = NextResponse.json({
      status: 'success',
      message: 'Déconnexion réussie'
    });

    response.cookies.set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Logout API error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Erreur lors de la déconnexion' },
      { status: 500 }
    );
  }
}