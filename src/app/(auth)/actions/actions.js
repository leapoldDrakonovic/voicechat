"use server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"


export const signUp = async (formData) => {
	const username = formData.get("username")
	const password = formData.get("password")
	const confirmPassword = formData.get("confirm-password")

	if (password !== confirmPassword) {
		throw new Error('Passwords do not match');
	}


	const existingUser = prisma.user.findUnique({
		where: { name: username }
	})

	if (exisstingUser) {
		throw new Error("User already exist")
	}

	const hashedPassword = await bcrypt.hash(password, 10); bcrypt


	const newUser = await prisma.user.create({
		data: {
			name: username,
			password: hashedPassword,
		},
	});

}