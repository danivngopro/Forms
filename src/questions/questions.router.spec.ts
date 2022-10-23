import request = require('supertest');
import mongoose from 'mongoose';
import { Server } from '../server';
import { config } from '../config';
import {
  validContent1,
  validCreatorId,
  validSurveyName1,
  validSurveyName2,
} from '../utils/mocks';
import { Question } from './questions.interface';
import { ValidationError } from '../utils/errors/questions';
import { QuestionManager } from './questions.manager';
const basePath = '/api/questions';

const {
  db: { connectionString, dbName },
} = config;

describe('Questions Router Module', () => {
  let server: Server;

  beforeAll(async () => {
    await mongoose.connect(connectionString, { dbName });
    await mongoose.connection.dropDatabase();
    server = Server.startServer();
  });

  afterEach(async () => {
    await mongoose.connection.db.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    server.closeServer();
  });

  it('gets the test endpoint', async () => {});

  describe('#Post /api/questions/createSurvey', () => {
    test('Should return the created survey', async () => {
      const response = await request(server.app)
        .post(`${basePath}/createSurvey`)
        .send({
          surveyName: validSurveyName1,
          creatorId: validCreatorId,
          content: validContent1 as Question[],
        });
      expect(response.status).toEqual(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toBeDefined();
      expect(response.body.id).toBeDefined();
    });

    test('Should throw ValidationError', async () => {
      try {
        await request(server.app).post(`${basePath}/createSurvey`).send({
          surveyName: validSurveyName1,
          creatorId: validCreatorId,
          content: '',
        });
      } catch (err) {
        expect(err).toBeInstanceOf(ValidationError);
      }
    });
  });

  describe('#Put /api/questions/updateSurvey', () => {
    test('Should return the updated survey', async () => {
      const survey = await QuestionManager.createSurvey(
        validSurveyName1,
        validCreatorId,
        validContent1 as Question[],
      );

      const response = await request(server.app)
        .put(`${basePath}/updateSurvey`)
        .send({
          surveyId: survey.id,
          surveyName: validSurveyName2,
          content: validContent1 as Question[] });
      expect(response.status).toEqual(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toBeDefined();
      expect(response.body.id).toBeDefined();
    });

    test('Should throw ValidationError', async () => {
      try {
        await request(server.app).post(`${basePath}/updateSurvey`).send({
          surveyName: validSurveyName1,
          creatorId: validCreatorId,
          content: '',
        });
      } catch (err) {
        expect(err).toBeInstanceOf(ValidationError);
      }
    });
  });
});