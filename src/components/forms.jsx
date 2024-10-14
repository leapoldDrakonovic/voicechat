"use client"

import { signUp, signIn } from "@/app/(auth)/actions/actions"
import { Input } from "@/components/ui/input"
import { SubmitButton } from "@/components/ui/buttons"
import { useState } from "react"

export const LoginForm = (props) => {

	
	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		try {
			await signIn(formData);
		} catch (err) {
			setError(err.message); 
		}
	};


	return (
		<form onSubmit={handleSubmit} className="border p-4 rounded-lg flex flex-col gap-4">
			<div className="flex flex-col">
				<label className="" htmlFor="username">Username</label>
				<Input className="relative" type="text" name="username" required />
			</div>
			<div className="flex flex-col">
				<label className="" htmlFor="password">Password</label>
				<Input className="" type="password" name="password" length={5} required />
			</div>
			{error && <p className="text-red-500">{error}</p>}
			<SubmitButton type="submit">Sing In</SubmitButton>
		</form>
	)
}


export const RegistrationForm = (props) => {


	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		try {
			await signUp(formData);
		} catch (err) {
			setError(err.message); 
		}
	};



	return (

		<form onSubmit={handleSubmit} className="border p-4 rounded-lg flex flex-col gap-4">
			<div className="flex flex-col">
				<label className="" htmlFor="username">Username</label>
				<Input className="relative" type="text" name="username" required />
			</div>
			<div className="flex flex-col">
				<label className="" htmlFor="password">Password</label>
				<Input className="" type="password" name="password" minLength={6} required />
			</div>
			<div className="flex flex-col">
				<label className="" htmlFor="confirm-password">Confirm Password</label>
				<Input className="" type="password" name="confirm-password" minLength={6} required />
			</div>
			{error && <p className="text-red-500">{error}</p>}
			<SubmitButton type="submit">Sing Up</SubmitButton>
		</form>
	)
}