import { Router } from "express";
import * as UserDAO from "./user.dao";
import { OkPacket } from "mysql";

export const userRouter = Router();

userRouter.get('/all', async (req, res) => {
    let users = await UserDAO.getAllUsers();
    res.status(200).json(users);
});

userRouter.get('/:userid', async (req, res) => {
    let userid = Number(req.params.userid);
    if(Number.isInteger(userid) && userid >= 0) {
        let user = await UserDAO.getUserById(userid);
        res.status(200).json(user);
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