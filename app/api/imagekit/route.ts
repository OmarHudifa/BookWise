import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";


const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {

  const response = NextResponse.json(imagekit.getAuthenticationParameters());
  response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return NextResponse.json(response);
}

export async function OPTIONS() {
  const response = NextResponse.json({});
  
  // Set CORS headers for OPTIONS (preflight)
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}


/*
// app/api/imagekit/route.ts



const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
  try {
    const authParams = imagekit.getAuthenticationParameters();
    const response = NextResponse.json(authParams);

    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate ImageKit auth parameters' }, { status: 500 });
  }
}

export async function OPTIONS() {
  const response = NextResponse.json({});
  
  // Set CORS headers for OPTIONS (preflight)
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}
*/