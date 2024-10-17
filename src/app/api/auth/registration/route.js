"use server"

import { signUp } from '@/app/(auth)/actions/actions';
import {NextResponse} from "next/server"

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, password, confirmPassword } = req.body; 
      console.log('API login called');
      

      await signUp( username, password, confirmPassword);

      res.json("Sussecc").status(200)
    } catch (error) {
      console.log(error)
    }
  } else {
      return NextResponse.json({message: "Method not allowed"}, {status: 405});
    
  }
}