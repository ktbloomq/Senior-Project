import { Router } from "express";
import * as PostDAO from "./post.dao";
import { OkPacket } from "mysql";

export const postRouter = Router();

postRouter.get('/all', async (req, res) => {
    let posts = await PostDAO.getAllPosts();
    res.status(200).json(posts);
});

postRouter.get('/:postid', async (req, res) => {
    let postid = Number(req.params.postid);
    if(Number.isInteger(postid) && postid >= 0) {
        let posts = await PostDAO.getPostById(postid);
        res.status(200).json(posts);
    } else {
        res.status(400).json({
            message: 'positive integer expected for postid'
        });
    }
});

postRouter.get('/user/:userid', async (req, res) => {
    let userid = Number(req.params.userid);
    if(Number.isInteger(userid) && userid >= 0) {
        let posts = await PostDAO.getPostById(userid);
        res.status(200).json(posts);
    } else {
        res.status(400).json({
            message: 'positive integer expected for userid'
        });
    }
});

postRouter.post('/', async (req, res) => {
    try {
        const okPacket: OkPacket = await PostDAO.createPost(req.body);
        res.status(200).json(okPacket);
    } catch {
        res.status(500).json({
            message: 'There was an error creating post'
        });
    }
})