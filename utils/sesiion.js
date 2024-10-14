import { cookies } from "next/headers";

class Session {
  constructor(cookieName, maxAge = 60 * 60 * 24 * 7) {
    this.cookieName = cookieName;
    this.maxAge = maxAge;
  }

  createSession(res, sessionData) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(this.cookieName, sessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: this.maxAge,
        sameSite: "lax",
        path: "/",
      })
    );
  }

  getSession(req) {
    const cookies = cookie.parse(req.headers.cookie || "");
    return cookies[this.cookieName] || null;
  }

  clearSession(res) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(this.cookieName, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: -1, 
        path: "/",
      })
    );
  }
}

export default Session;
