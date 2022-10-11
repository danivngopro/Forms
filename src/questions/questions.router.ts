import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { QuestionController } from './questions.controller';
import {
  createQuestionReqSchema, getQuestion,
} from './validator/questions.schema';

const QuestionRouter: Router = Router();

QuestionRouter.post('/', ValidateRequest(createQuestionReqSchema), wrapAsync(QuestionController.create));
QuestionRouter.post('/questionCreated', ValidateRequest(getQuestion), wrapAsync(QuestionController.addUsers));

export { QuestionRouter };
