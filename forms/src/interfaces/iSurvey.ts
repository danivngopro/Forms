import { iSection } from './iSection';

export interface iSurvey {
    surveyId: string;
    userId: string;
    content: Array<iSection>;
}