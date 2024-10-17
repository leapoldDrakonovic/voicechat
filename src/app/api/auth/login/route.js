"use server"

import { signIn } from '@/app/(auth)/actions/actions';
import {NextResponse} from "next/server"

export async function POST(req) {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body; 
      
      console.log('API login called');
      console.log(username, password)
      await signIn( {username, password});

      return NextResponse.json({message: "Success"}, {status: 200});
    } catch (error) {
      console.log(error)
    }
  } else {
      return NextResponse.json({message: "Method not allowed"}, {status: 405});
    
  }
}