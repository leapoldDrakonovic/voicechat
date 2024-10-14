import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="font-bold text-3xl">Welcome to Chat</h3>
      <span className="text-lg">You have to auth to move forward</span>
      <div className="flex flex-row gap-4 items-center justify-around">
        <Link href={"/sing-in"}>LOGIN</Link>
        <Link href={"/sing-up"}>REGISTRATION</Link>
      </div>
    </div>
  );
};

export default Welcome;
