import express from 'express';
import AuthorController from '../controllers/author-controller';

const router = express.Router();

router.post('/create-author', AuthorController.createAuthor);

export default router;
