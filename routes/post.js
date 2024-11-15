import express from 'express';
import { getPosts } from '../controllers/get.js';
import { getPostId } from '../controllers/getId.js';
import { updatePost } from '../controllers/update.js';
import { postPost } from '../controllers/post.js';
import { deletePost } from '../controllers/delete.js';

const router = express.Router();

router.post('/', postPost);        
router.put('/:id', updatePost);     
router.get('/', getPosts); 
router.get('/:id', getPostId);  
router.delete('/:id', deletePost);     

export const postRoutes = router;