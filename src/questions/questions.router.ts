import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { QuestionController } from './questions.controller';
import {
  createSurveyReqSchema, addQuestionReqSchema, getSurveyReqSchema,
} from './validator/questions.schema';

const QuestionRouter: Router = Router();

QuestionRouter.post('/createSurvey', ValidateRequest(createSurveyReqSchema), wrapAsync(QuestionController.createSurvey));
QuestionRouter.put('/updateSurvey', ValidateRequest(addQuestionReqSchema), wrapAsync(QuestionController.updateSurvey));
QuestionRouter.get('/getSurvey/id/:id', ValidateRequest(getSurveyReqSchema), wrapAsync(QuestionController.getSurvey));
QuestionRouter.delete('/deleteSurvey/id/:id', ValidateRequest(getSurveyReqSchema), wrapAsync(QuestionController.deleteSurvey));

export { QuestionRouter };
