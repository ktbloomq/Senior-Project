import { Router } from "express";
import * as PostDAO from "./post.dao";
import { OkPacket } from "mysql";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: "img",
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + Math.trunc(Math.random() * 1E3);
        cb(null, uniqueName + '-' + file.originalname);
    }
});

const uploadImage: multer.Multer = multer({
    storage: storage,
});

export const postRouter = Router();

postRouter.get('/all', async (req, res) => {
    let posts = await PostDAO.getAllPosts();
    res.status(200).json(posts);
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

postRouter.post('/', uploadImage.single("image"), async (req, res) => {
    // console.log("req", req);
    let post = req.body;
    if(req.file) {
        post.image_url = req.file.filename;
    }
    try {
        console.log("create post", post);
        const okPacket: OkPacket = await PostDAO.createPost(post);
        res.status(200).json(okPacket);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'There was an error creating post'
        });
    }
});

postRouter.get('/image/:path', async (req, res) => {
    const filename = req.params.path;
    const options = {
        root: path.join(__dirname, '../../img')
      }
    res.status(200).sendFile(filename,options, null);
});

postRouter.get('/like/:postid', async (req, res) => {
    const postid = Number(req.params.postid);
    if(Number.isInteger(postid) && postid >= 0) {
        let okPacket = await PostDAO.likePost(postid);
        res.status(200).json(okPacket);
    } else {
        res.status(400).json({
            message: 'positive integer expected for postid'
        });
    }
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