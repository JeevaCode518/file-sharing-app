import express from 'express';
import { register } from '../controller/register-controller.js';
import upload from '../utils/upload.js';
import { getImage, uploadFile } from '../controller/upload-controller.js';

const router = express.Router();

router.get('/register', register);
router.post("/upload", upload.single('file'), uploadFile);
router.get('/file/:fileId', getImage);

export default router;