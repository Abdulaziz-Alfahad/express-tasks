import { z } from 'zod';

export const taskSchema = z.object({
  name: z.string().min(3, { message: 'Name is required and should be at least 3 characters long.' }),
  content: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed'], {
    errorMap: () => ({ message: 'Invalid status. Please choose from "pending", "in-progress", or "completed".' })
  })
});

export const updateTaskSchema = 
    taskSchema.partial()
    .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided to update.'
    });
export const paramsSchema = z.object({
    id: z.preprocess((val) => {
        // Convert the value to a number if it's a string
        return typeof val === 'string' ? Number(val) : val;
    }, z.number().int())  // Ensure it's a valid integer
});
export type TaskSchema = z.infer<typeof taskSchema>;
export type updateTaskSchema = z.infer<typeof updateTaskSchema>
export type paramsSchema = z.infer<typeof paramsSchema>;