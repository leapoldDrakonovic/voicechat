"use client";
import { signUp, signIn, signOut } from "@/app/(auth)/actions/actions";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/ui/buttons";
import Session from "@/utils/session";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const DTO = {
      username: username,
      password: password,
    };

    console.log(username, password);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DTO),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        router.push("/");
      } else {
        const error = await response.json();
        console.error(error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
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
      <SubmitButton disabled={loading} type="submit">
        Sing In
      </SubmitButton>
    </form>
  );
};

export const RegistrationForm = (props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    setLoading(true);
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    const DTO = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await fetch("/api/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DTO),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        const error = await response.json();
        console.error(error);
        setError(error);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleRegistration}
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
      <SubmitButton disabled={loading} type="submit">
        Sing Up
      </SubmitButton>
    </form>
  );
};

// TODO закончить логаут
export const LogOutForm = (props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleLogout = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (response.ok) {
        router.push("/sing-in");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Logging Out..." : "Log Out"}
      </SubmitButton>
    </form>
  );
};

export const CreateServerForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <form className="flex flex-col p-4 gap-4">
      <Input placeholder="Server Name"/>
      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Creating" : "Create server"}
      </SubmitButton>
    </form>
  );
};
