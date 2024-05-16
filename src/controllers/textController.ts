import { Request, Response } from 'express';
import TextService from '../services/textService';

class TextController {
  static async createText(req: Request, res: Response) {
    const { content } = req.body;
    const text = await TextService.createText(content);
    res.status(201).json(text);
  }

  static async getText(req: Request, res: Response) {
    const { id } = req.params;
    const text = await TextService.getTextById(id);
    if (text) {
      res.json(text);
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }

  static async updateText(req: Request, res: Response) {
    const { id } = req.params;
    const { content } = req.body;
    const text = await TextService.updateText(id, content);
    if (text) {
      res.json(text);
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }

  static async deleteText(req: Request, res: Response) {
    const { id } = req.params;
    const text = await TextService.deleteText(id);
    if (text) {
      res.json({ message: 'Text deleted' });
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }

  static async wordCount(req: Request, res: Response) {
    const { id } = req.params;
    const text = await TextService.getTextById(id);
    if (text) {
      const count = TextService.wordCount(text.content);
      res.json({ wordCount: count });
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }

  static async characterCount(req: Request, res: Response) {
    const { id } = req.params;
    const text = await TextService.getTextById(id);
    if (text) {
      const count = TextService.characterCount(text.content);
      res.json({ characterCount: count });
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }

  static async sentenceCount(req: Request, res: Response) {
    const { id } = req.params;
    const text = await TextService.getTextById(id);
    if (text) {
      const count = TextService.sentenceCount(text.content);
      res.json({ sentenceCount: count });
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }

  static async paragraphCount(req: Request, res: Response) {
    const { id } = req.params;
    const text = await TextService.getTextById(id);
    if (text) {
      const count = TextService.paragraphCount(text.content);
      res.json({ paragraphCount: count });
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }

  static async longestWord(req: Request, res: Response) {
    const { id } = req.params;
    const text = await TextService.getTextById(id);
    if (text) {
      const word = TextService.longestWord(text.content);
      res.json({ longestWord: word });
    } else {
      res.status(404).json({ message: 'Text not found' });
    }
  }
}

export default TextController;
