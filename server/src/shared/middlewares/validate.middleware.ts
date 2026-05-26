import { z } from 'zod';
import type { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../libs/apiResponse.js';

export const validate =
  (
    schema: z.ZodTypeAny,
    property: 'body' | 'params' | 'query' = 'body',
    mode: 'first' | 'all' = 'first',
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    const data = req[property] ?? {};
    const result = schema.safeParse(data);

    if (!result.success) {
      const errors = result.error.issues;
      return ApiResponse.error(
        res,
        400,
        errors[0]?.code === 'unrecognized_keys'
          ? 'Unknown fields are not allowed'
          : `Bad request`,
        mode === 'first'
          ? {
              field: errors[0]?.path?.join('.'),
              message: errors[0]?.message,
              code: errors[0]?.code,
            }
          : errors,
      );
    }
    next();
  };
