import { signOut } from '@/(auth)/actions'
import { redirect } from 'next/navigation'
 
export default async function handler(req, res) {
  try {
    
    await signOut()
 
    res.status(200).json({ success: true })
  } catch (error) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  } finally {
    redirect("/sing-in")
  }
}