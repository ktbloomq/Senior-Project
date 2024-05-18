import { Router } from "express";
import * as UserDAO from "./user.dao";
import { OkPacket } from "mysql";
import User from "../../../types/user.model";

export const userRouter = Router();

userRouter.get('/all', async (req, res) => {
    let rawUsers:any = await UserDAO.getAllUsers();
    let users:User[] = rawUsers.map((u: any) => {
        return{
            id: parseInt(u.userid),
            name: u.name,
            image: u.image
        }
    });
    res.status(200).json(rawUsers);
});

userRouter.get('/:userid', async (req, res) => {
    let userid = Number(req.params.userid);
    if(Number.isInteger(userid) && userid >= 0) {
        let rawUser:any = (await UserDAO.getUserById(userid))[0];
        if(rawUser) {
            let user:User = {
                id: parseInt(rawUser.userid),
                name: rawUser.name,
                image: rawUser.image
            }

            res.status(200).json(user);
        } else {
            res.status(404).end();
        }
    } else {
        res.status(400).json({
            message: 'positive integer expected for userid'
        });
    }
});

userRouter.post('/', async (req, res) => {
    try {
        const okPacket: OkPacket = await UserDAO.createUser(req.body);
        res.status(200).json(okPacket);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'There was an error creating user'
        });
    }
})