"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {LoadingWindow} from "@/components/loader"
import useSession from "@/hooks/useSession"

export default function Home() {
  const router = useRouter();


  const {isSession} = useSession()

  if (isSession === null) {
    return <LoadingWindow />
  }

  if (isSession) {
    router.push("/chat");
    return null;
  }

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="font-bold text-3xl">
          {" "}
          Welcome to VoiceChat application
        </h2>
        <p>To contionue you have to registration or login</p>
      </div>
      <div className="flex flex-row gap-4">
        <Link href={"/sing-in"}>Sing in</Link>
        <Link href={"/sing-up"}>Sing in</Link>
      </div>
    </div>
  );
}
