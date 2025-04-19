import express from 'express';
import taskRoutes from './taskRoutes.js';

const router = express.Router();

router.use('/tasks', taskRoutes);

export default router;

