"use server"

import { signOut } from '@/app/(auth)/actions/actions';
import {NextResponse} from "next/server"

export async function POST(req) {
  if (req.method === 'POST') {
    try {
      console.log('API logout called');
      await signOut();

      return NextResponse.json({message: "Success"}, {status: 200});
    } catch (error) {
      console.log(error)
    }
  } else {
      return NextResponse.json({message: "Method not allowed"}, {status: 405});
    
  }
}