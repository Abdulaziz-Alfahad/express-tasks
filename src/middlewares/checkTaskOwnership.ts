import {Request, Response, NextFunction} from 'express';
import { JwtPayload } from 'jsonwebtoken';
import * as taskService from '../services/taskService.js';
export const checkTaskOwnership = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as JwtPayload;
    const userId = Number(user.id);
    const taskId = req.params.id;
    try{
        const task = await taskService.getTaskById(Number(taskId));

        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        if (task.userId !== userId) {
            res.status(403).json({ message: 'You do not have permission to modify this task' });
            return;
        }
    
        next();
    }catch(err){
        if(err){
            res.json(err);
        }else{
            res.status(500).send("Internal server error")
        }
    }
}