import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: z.string(),
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(10),
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().min(10),
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().min(10),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
  },
});
