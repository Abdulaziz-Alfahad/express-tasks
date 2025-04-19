import prisma from '../prisma/prismaClient.js'; // Import prisma client
import { TaskSchema, updateTaskSchema } from '../schemas/taskSchema.js';

export const getAllTasks = async () =>{
    return await prisma.task.findMany();
}

export const createTask = async (taskData: TaskSchema) => {
  return await prisma.task.create({
    data: taskData,
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