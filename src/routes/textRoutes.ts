import { Router } from 'express';
import TextController from '../controllers/textController';

const router = Router();

router.post('/text', TextController.createText);
router.get('/text/:id', TextController.getText);
router.put('/text/:id', TextController.updateText);
router.delete('/text/:id', TextController.deleteText);
router.get('/text/:id/wordCount', TextController.wordCount);
router.get('/text/:id/characterCount', TextController.characterCount);
router.get('/text/:id/sentenceCount', TextController.sentenceCount);
router.get('/text/:id/paragraphCount', TextController.paragraphCount);
router.get('/text/:id/longestWord', TextController.longestWord);

export default router;
