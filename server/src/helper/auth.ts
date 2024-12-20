import * as jwt from "jsonwebtoken";

export function generateAccessToken(payload: object): string {
    let token: string;
    try {
        token = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY as string, { expiresIn: '24h' })
    } catch (err) {
        throw err;
    }
    return token;
}

export function generateRefreshToken(payload: object): string {
    let token: string;
    try {
        token = jwt.sign(payload, process.env.REFRESH_TOKEN_KEY as string, { expiresIn: '24h' })
    } catch (err) {
        throw err;
    }
    return token;
}