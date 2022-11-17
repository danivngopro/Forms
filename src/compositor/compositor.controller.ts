import { Request, Response } from 'express';
//import { iSurvey, iSection } from './answers.interface';
import { AnswerManager } from './answers.manager';

export class AnswerController {
  static async deleteSurvey(req: Request, res: Response): Promise<void> {
    const { surveyId } = req.query as any;
    res.json(await compositorManager.deleteSurvey(newSurvey));
  }

  static async getSurveyResults(req: Request, res: Response): Promise<void> {
    const { surveyId } = req.query as any;
    res.json(await compositorManager.getSurveyResults(surveyId));
  }
}
