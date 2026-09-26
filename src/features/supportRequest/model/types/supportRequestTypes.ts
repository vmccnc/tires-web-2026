import { z } from 'zod';
import type { supportRequestSchema } from '../schemas/supportRequestSchema';

export type SupportRequestFormType = z.infer<typeof supportRequestSchema>;

export type SupportRequestPayloadType = {
  siteKey: string;
  name: string;
  email: string;
  phone: string;
  comment: string;
  consent: boolean;
  pageUrl: string;
};
