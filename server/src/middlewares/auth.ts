import { NextFunction } from "express";


export function authenticate(req: Request, res: Response, next: NextFunction) {
    
    next();
}