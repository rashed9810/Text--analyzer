import { Request, Response } from 'express';
declare class TextController {
    static createText(req: Request, res: Response): Promise<void>;
    static getText(req: Request, res: Response): Promise<void>;
    static updateText(req: Request, res: Response): Promise<void>;
    static deleteText(req: Request, res: Response): Promise<void>;
    static wordCount(req: Request, res: Response): Promise<void>;
    static characterCount(req: Request, res: Response): Promise<void>;
    static sentenceCount(req: Request, res: Response): Promise<void>;
    static paragraphCount(req: Request, res: Response): Promise<void>;
    static longestWord(req: Request, res: Response): Promise<void>;
}
export default TextController;
