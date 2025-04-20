import { Request, Response } from 'express';
import * as taskService from '../services/taskService.js';
import { taskSchema, updateTaskSchema, paramsSchema} from '../schemas/taskSchema.js';
import { JwtPayload } from 'jsonwebtoken';

export const getAllTasks = async(req: Request, res: Response) =>{
  try{
    const user = req.user as JwtPayload
    let tasks = await taskService.getAllTasks(Number(user.id));
    res.json(tasks);
return;
  }catch(err){
    if(err) res.json(err);
    else res.status(500).json({error: "Internal server error"})
  }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const user = req.user as JwtPayload;
    const userId = Number(user.id)
    const validatedData = taskSchema.parse(req.body);
    const task = await taskService.createTask(validatedData, userId);
    res.status(201).json(task);
    return;
  } catch (err) {
    if (err) {
      res.status(400).json({ error: err });
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