// app/api/imagekit/route.ts

import { NextResponse } from 'next/server';
import ImageKit from 'imagekit';
import config from '@/lib/config';

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function OPTIONS() {
  const response = NextResponse.json({});
  
  // Set CORS headers for OPTIONS (preflight)
  response.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins (for dev, replace with your domain in production)
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}

export async function GET() {
  try {
    const authParams = imagekit.getAuthenticationParameters();
    const response = NextResponse.json(authParams);

    // Set CORS headers for the actual response
    response.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins (for dev, replace with your domain in production)
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate ImageKit auth parameters' }, { status: 500 });
  }
}
