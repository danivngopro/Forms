import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { AnswerController } from './answers.controller';
import {
  postSurveySchema, 
} from './validator/answers.schema';

const AnswerRouter: Router = Router();

AnswerRouter.post('/', ValidateRequest(postSurveySchema), wrapAsync(AnswerController.create));
//AnswerRouter.get('/find', ValidateRequest(getByIdReqSchema), wrapAsync(AnswerController.getUsersList));
console.log("---------")

export { AnswerRouter };   