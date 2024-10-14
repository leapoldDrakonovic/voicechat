"use server"

import { cookies } from "next/headers";

class Session {
  constructor(cookieName, maxAge = 60 * 60 * 24 * 7) {
    this.cookieName = cookieName;
    this.maxAge = maxAge;
  }

  async createSession(sessionData) {
    try {
      await cookies().set({
      name: this.cookieName,
      value: sessionData,
      httpOnly: true,
      path: '/',
    })
    } catch(e) {
      throw new Error(e);
    }

  }

  async getName () {
    try {
      const name = await cookies().get(this.cookieName)
       return name ? name.value : null
    } catch(e) {
      // statements
      console.log(e);
    }
  }

  async getSession() {

      try {
      const cookieStore = cookies()
      const hasCookie = await cookieStore.has(this.cookieName) 
      return hasCookie       
      } catch(e) {
        console.log(e);
      }
  }

  async clearSession() {
    try {
   await cookies().delete(this.cookieName)
    } catch(e) {
      console.log(e);
    }
  }
}

export default Session;
