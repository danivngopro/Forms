import { Request, Response } from 'express';
//import { iSurvey, iSection } from './answers.interface';
import { UserManager } from './answers.manager';

export class AnswerController {
  static async create(req: Request, res: Response): Promise<void> {
    const newSurvey = req.body;
    res.json(await UserManager.create(newSurvey));
  }
}
