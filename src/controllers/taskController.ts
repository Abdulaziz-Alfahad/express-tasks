import { Request, Response } from 'express';
import * as taskService from '../services/taskService.js';
import { taskSchema, updateTaskSchema, paramsSchema} from '../schemas/taskSchema.js';

export const getAllTasks = async(req: Request, res: Response) =>{
    try{
        let tasks = await taskService.getAllTasks();
        res.json(tasks);
        return;
    }catch(err){
        if(err) res.json(err);
        else res.status(500).json({error: "Internal server error"})
    }
}

// Controller for creating a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    // Validate request body using Zod
    const validatedData = taskSchema.parse(req.body);  // This will throw if validation fails

    // If data is valid, call service to create task
    const task = await taskService.createTask(validatedData);
    res.status(201).json(task); // Return created task
    return;
  } catch (error) {
    // If validation fails or any other error occurs, send error response
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const updateTask = async(req: Request, res: Response) =>{
    try{
        const { id } = paramsSchema.parse(req.params);
        const validatedData = updateTaskSchema.parse(req.body);
        let oldTask = await taskService.getTaskById(id);
        let updatedTask = await taskService.updateTask(id,validatedData);
        res.json({
            old: oldTask,
            updated: updatedTask
        })
        return;
    }catch(err){
        if(err instanceof Error){
            res.status(400).json({ error: err.message });
        }else{
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}