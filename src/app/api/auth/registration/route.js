"use server"

import { signUp } from '@/app/(auth)/actions/actions';
import {NextResponse} from "next/server"

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      const body = await req.json()
      const { username, password, confirmPassword } = body; 
      console.log('API registration called');
      

      await signUp( {username, password, confirmPassword});

      return NextResponse.json({message: "Ok"}, {status: 200});
      
    } catch (error) {
      console.log(error)
    }
  } else {
      return NextResponse.json({message: "Method not allowed"}, {status: 405});
    
  }
}