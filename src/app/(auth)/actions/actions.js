"use server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

export const signOut = async() => {
	// todo
	// clear session
}


export const signIn = async (formData) => {
	const username = formData.get("username")
	const password = formData.get("password")

	const User = await prisma.User.findFirst({
		where: { name: username }
	})


	if (!User) {
		throw new Error('User not found');
	}

	const isPasswordCorrect = await bcrypt.compare(password, User.password);
	if (!isPasswordCorrect) {
		throw new Error('Incorrect Password');
	}


	// todo
	// finish work with session 
	const cookieStore = cookies();
	cookieStore.set({
		name: 'session',
		value: User.id,  
		httpOnly: true, 
		path: '/',
		maxAge: 60 * 60 * 24,  
	});

	
	return redirect("/")
}


export const signUp = async (formData) => {
	const username = formData.get("username")
	const password = formData.get("password")
	const confirmPassword = formData.get("confirm-password")

	if (password !== confirmPassword) {
		throw new Error('Passwords do not match');
	}


	const existingUser = await prisma.User.findFirst({
		where: { name: username }
	})

	if (existingUser) {
		throw new Error("User already exist")
	}

	const hashedPassword = await bcrypt.hash(password, 10); 


	const newUser = await prisma.User.create({
		data: {
			name: username,
			password: hashedPassword,
		},
	});


	return redirect("/")
	
}