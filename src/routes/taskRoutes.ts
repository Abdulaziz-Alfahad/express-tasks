import express from 'express';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/', taskController.getAllTasks)
router.post('/', taskController.createTask);
router.post('/:id', taskController.updateTask)
export default router;