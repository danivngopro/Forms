import * as Joi from '@hapi/joi';

const surveySchema = Joi.object({
  surveyId: Joi.string(),
  userId: Joi.string(),
  content: Joi.array().items(Joi.iSection),
});

export const postSurveySchema = Joi.object({
  body: surveySchema,
  query: {},
  params: {},
});



