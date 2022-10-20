import * as mongoose from 'mongoose';
import { config } from '../config';
/* eslint-disable @typescript-eslint/naming-convention */
import { QuestionManager } from './questions.manager';
import {
  validSurveyName1,
  validSurveyName2,
  validCreatorId,
  validContent1,
  validContent2,
  invalidSurveyId,
} from '../utils/mocks';
import { Question } from './questions.interface';
import { surveyNotFoundError } from '../utils/errors/questions';

const {
  db: { connectionString, dbName },
} = config;

describe('call Manager Module', () => {
  beforeAll(async () => {
    await mongoose.connect(connectionString, { dbName });
  });

  afterEach(async () => {
    await mongoose.connection.db.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe('Post a survey', () => {
    test('Should create a survey', async () => {
      const createdSurvey = await QuestionManager.createSurvey(
        validSurveyName1,
        validCreatorId,
        validContent1 as Question[],
      );
      if (!createdSurvey.id) {
        fail();
      }
      const survey = await QuestionManager.getSurveyById(createdSurvey.id);
      expect(createdSurvey.id).toEqual(survey?.id);
    });
  });

  describe('Update a survey', () => {
    test('Should Update a survey', async () => {
      const createdSurvey = await QuestionManager.createSurvey(
        validSurveyName1,
        validCreatorId,
        validContent1 as Question[],
      );

      if (!createdSurvey.id) {
        fail();
      }

      const updatedSurvey = await QuestionManager.updateSurvey(
        createdSurvey.id,
        validSurveyName2,
        validContent2 as Question[],
      );
      const survey = await QuestionManager.getSurveyById(createdSurvey.id);

      expect(updatedSurvey?.id).toEqual(survey?.id);
      expect(updatedSurvey?.surveyName).toEqual(survey?.surveyName);
    });

    test('Should Update a survey without a name', async () => {
      const createdSurvey = await QuestionManager.createSurvey(
        validSurveyName1,
        validCreatorId,
        validContent1 as Question[],
      );

      if (!createdSurvey.id) {
        fail();
      }

      const updatedSurvey = await QuestionManager.updateSurvey(
        createdSurvey.id,
        '',
        validContent2 as Question[],
      );
      const survey = await QuestionManager.getSurveyById(createdSurvey.id);
      expect(updatedSurvey?.id).toEqual(survey?.id);
      expect(createdSurvey?.surveyName).toEqual(survey?.surveyName);
    });

    test('Should throw survey not found error', async () => {
      const createdSurvey = await QuestionManager.createSurvey(
        validSurveyName1,
        validCreatorId,
        validContent1 as Question[],
      );

      if (!createdSurvey.id) {
        fail();
      }
      try {
        await QuestionManager.updateSurvey(
          invalidSurveyId,
          '',
          validContent2 as Question[],
        );
      } catch (err) {
        expect(err).toBeInstanceOf(surveyNotFoundError);
      }
    });
  });
});
