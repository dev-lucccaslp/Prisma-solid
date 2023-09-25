import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"
import { PrismaUserRepository } from '@/repositories/prisma-users-repository'

interface RegisterServiceRequest {
  name: string
  email: string
  password: string
}

export async function registerService({ name, email, password }: RegisterServiceRequest) {

  const password_hash = await hash(password, 6)
  const userWithSameEmail = await prisma.user.findUnique({
    where: {
       email
      },
  })

  if(userWithSameEmail){
    throw new Error('Email exist')
  }

  const prismaUserRepository = new PrismaUserRepository()

  await prismaUserRepository.create({
    name,
    email,
    password_hash
  })
}