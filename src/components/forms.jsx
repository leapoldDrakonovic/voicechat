"use client";

import { signUp, signIn, signOut } from "@/app/(auth)/actions/actions";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/ui/buttons";
import { useState } from "react";
import Session from "@/utils/session";
import { redirect } from "next/navigation";

export const LoginForm = (props) => {
  const [error, setError] = useState("");

  const handleLogin = (event, formData) => {
	event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    fetch("/api/auth/login", {
      method: "POST",
      body: {
        username: username,
        password: password,
      },
    });


  };

  return (
    <form
      onSubmit={handleLogin}
      className="border p-4 rounded-lg flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label className="" htmlFor="username">
          Username
        </label>
        <Input className="relative" type="text" name="username" required />
      </div>
      <div className="flex flex-col">
        <label className="" htmlFor="password">
          Password
        </label>
        <Input
          className=""
          type="password"
          name="password"
          length={5}
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <SubmitButton type="submit">Sing In</SubmitButton>
    </form>
  );
};

export const RegistrationForm = (props) => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      signUp(formData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded-lg flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label className="" htmlFor="username">
          Username
        </label>
        <Input className="relative" type="text" name="username" required />
      </div>
      <div className="flex flex-col">
        <label className="" htmlFor="password">
          Password
        </label>
        <Input
          className=""
          type="password"
          name="password"
          minLength={6}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="" htmlFor="confirm-password">
          Confirm Password
        </label>
        <Input
          className=""
          type="password"
          name="confirm-password"
          minLength={6}
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <SubmitButton type="submit">Sing Up</SubmitButton>
    </form>
  );
};

// TODO закончить логаут
export const LogOutForm = (props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogout = async(event) => {
	event.preventDefault()
	await fetch("http://localhost/api/auth/logout", {method: "POST"})
	
  }


  return (
    <form onSubmit={handleLogout}>
      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Logging Out..." : "Log Out"}
      </SubmitButton>
    </form>
  );
};
