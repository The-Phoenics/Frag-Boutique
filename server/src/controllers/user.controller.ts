import { Request, Response } from "express";

// TODO
export function user_signin(req: Request, res: Response) {
    res.send('User sign in')
}

export function user_signup(req: Request, res: Response) {
    res.send('User sign up')
}

export function user_delete(req: Request, res: Response) {
    res.send('User delete')
}

export function user_verify(req: Request, res: Response) {
    res.send('User verify')
}

export function user_logout(req: Request, res: Response) {
    res.send('User logout')
}