import express from 'express';
import taskRoutes from './taskRoutes.js';
import userRoutes from './userRoutes.js'
import { authenticateToken } from '../middlewares/authenticateToken.js';
const router = express.Router();

router.use('/tasks', authenticateToken, taskRoutes);
router.use('/user', userRoutes);
export default router;

