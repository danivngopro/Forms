import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
// import { ValidateRequest } from '../utils/joi';
// import { compositorController } from './compositor.controller';
// import { postSurveySchema, getSurveySchema } from './validator/answers.schema';

const compositorRouter: Router = Router();

compositorRouter.delete(
  '/deleteSurvey/:id',
  // ValidateRequest(postSurveySchema),
  wrapAsync(compositorController.deleteSurvey)
);
compositorRouter.get(
  '/getSurveyResults/:id',
  // ValidateRequest(getSurveySchema),
  wrapAsync(AnswerController.getSurveyResults)
);

export { compositorRouter };
