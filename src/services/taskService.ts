import prisma from '../prisma/prismaClient.js'; // Import prisma client
import { TaskSchema, updateTaskSchema } from '../schemas/taskSchema.js';

export const getAllTasks = async (userId: number) =>{
    return await prisma.task.findMany({
        where: {userId: userId}
    });
}

export const createTask = async (taskData: TaskSchema, userId: number) => {
  return await prisma.task.create({
    data: {
        name: taskData.name,
        content: taskData.content ?? null,
        status: taskData.status,
        user: { connect: { id: userId } }
    }
  });
};

export const getTaskById = async(taskId: number) =>{
    return await prisma.task.findUnique({
        where:{id: taskId}
    })
}

export const updateTask = async (taskId: number, taskData: updateTaskSchema) =>{
    return await prisma.task.update({
        where: {id: taskId},
        data: taskData
    });
}