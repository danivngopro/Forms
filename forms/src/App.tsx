import "./App.css";
import { Route, Routes } from "react-router-dom";
import SurveyCreationPage from "./pages/SurveyAnswerPage/SurveyCreationPage"; // change

function App() {
  return (
    <div className="survey-creation-name-container">
      <Routes>
        <Route path="/answerSurvey" element={<SurveyAnswerPage />} />
      </Routes>
    </div>
  );
}

export default App;