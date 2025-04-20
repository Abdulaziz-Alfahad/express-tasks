import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { checkTaskOwnership } from '../middlewares/checkTaskOwnership.js'
const router = express.Router();

router.get('/', taskController.getAllTasks)
router.post('/', taskController.createTask);
router.post('/:id', checkTaskOwnership , taskController.updateTask)
export default router;