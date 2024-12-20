import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: any
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: "Token not provided or invalid format" });
        return;
    }
    const token = authHeader.split(' ')[1];
    console.log(token)
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY as string, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        // req.user = decoded;
        next();
    });
}