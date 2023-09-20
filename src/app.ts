import fastify from "fastify"
<<<<<<< HEAD
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: "lucas",
    email: "teste@teste.com",
  },
})














=======
import { PrismaClient } from "@prisma/client"

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name:'Lucas',
    email: 'teste@teste.com'
  }
})
>>>>>>> 6278e62e985a4622d968846609832ec76ca0a8a2
