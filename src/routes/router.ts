import express from 'express';
import taskRoutes from './taskRoutes.js';
import userRoutes from './userRoutes.js'
const router = express.Router();

router.use('/tasks', taskRoutes);
router.use('/user', userRoutes);
export default router;

