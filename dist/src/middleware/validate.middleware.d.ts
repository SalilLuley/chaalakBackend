import { Request, Response, NextFunction } from 'express';
export declare const validate: (schema: any) => (req: Request, res: Response, next: NextFunction) => void;