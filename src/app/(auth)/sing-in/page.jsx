"use client"

import {LoginForm} from "@/components/forms"
import {LoadingWindow} from "@/components/loader"
import useSession from '@/hooks/useSession'
import { useRouter } from "next/navigation";


const SignIn = () => {


const router = useRouter()
const {isSession} = useSession()


  if (isSession === null) {
    return <LoadingWindow />
  }

if (isSession) {
	router.push("/chat")
}

  return (
    <div>
        <LoginForm/>
    </div>
  )
}

export default SignIn