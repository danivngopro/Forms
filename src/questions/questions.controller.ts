import { Request, Response } from 'express';
import { QuestionManager } from './questions.manager';

export class QuestionController {
  static async createSurvey(req: Request, res: Response): Promise<void> {
    res.json(await QuestionManager.createSurvey(req.body.surveyName, req.body.content));
  }

  static async updateSurvey(req: Request, res: Response): Promise<void> {
    res.json(await QuestionManager.updateSurvey(req.body.surveyId, req.body.surveyName, req.body.content));
  }

  static async getSurvey(req: Request, res: Response): Promise<void> {
    res.json(await QuestionManager.getSurvey(req.params.id));
  }
  
  static async deleteSurvey(req: Request, res: Response): Promise<void> {
    res.json(await QuestionManager.deleteSurvey(req.params.id));
  }
}
