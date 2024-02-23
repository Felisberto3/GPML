import { NextFunction, Request, Response } from "express";

function authUser(req:Request, res:Response, next:NextFunction) {
    const token = req.header('Authorization')?.split(' ')

    console.log(token, 'aqui ');
    
}

export { authUser }