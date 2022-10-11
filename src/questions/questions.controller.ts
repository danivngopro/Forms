import { Request, Response } from 'express';
import { QuestionManager } from './questions.manager';

export class QuestionController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await QuestionManager.create(req.body));
  }

  static async addUsers(req: Request, res: Response): Promise<void> {
    res.json(await QuestionManager.addUsers(req.body.RequestID, req.body.Status));
  }
}
