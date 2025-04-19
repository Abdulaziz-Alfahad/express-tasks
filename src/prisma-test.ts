import { PrismaClient } from '@prisma/client'
import { Task } from '@prisma/client'

const prisma = new PrismaClient()

const newTask = await prisma.task.create({
    data: {
      name: 'Write TypeScript app',
      content: 'Build a simple REST API with Express and Prisma',
      status: 'pending'
    },
  })
  console.log(newTask)