import { z } from "zod";

export const regSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(5)
})
