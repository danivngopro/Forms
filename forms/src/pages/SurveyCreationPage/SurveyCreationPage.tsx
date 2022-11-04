import { useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";
import plus from "../../assets/plus.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { iSurvey } from "../../interfaces/iSurvey";

function SurveyCreationPage(props: { surveyName: string }) {
  const [sections, setSections] = useState([
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "אברה קדברה אתה סוס",
      content: [
        {
          id: "123456123456123456123456",
          questionName: "מה קורה?",
          questionType: "radio",
          answers: [
            { id: "123456123456123456123456", answer: "בסדר" },
            { id: "12345612345612345612345a", answer: "בסדר גמור אפילו" },
            { id: "12345612345612345612345b", answer: "על הפנים" },
            { id: "123456123456123456z2345b", answer: "שורד." },
          ],
        },
      ],
    },
  ]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: "123456123456123456123456",
        creatorId: "123456123456123456123456",
        surveyName: "אברה קדברה אתה סוס",
        content: [
          {
            id: "123456123456123456123456",
            questionName: "מה קורה?",
            questionType: "radio",
            answers: [
              { id: "123456123456123456123456", answer: "בסדר" },
              { id: "12345612345612345612345a", answer: "בסדר גמור אפילו" },
              { id: "12345612345612345612345b", answer: "על הפנים" },
              { id: "123456123456123456z2345b", answer: "שורד." },
            ],
          },
        ],
      },
    ]);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(sections);
    const [recordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItems);

    setSections(items);
  };

  return (
    <div className="survey-creation-page-container">
      <div className="survey-creation-page-container-without-plus_svg">
        <h1>hello creation page</h1>
        <div className="survey-creation-page-title-container">
          <SurveyTitle surveyName={props.surveyName} />
        </div>
        <div className="survey-creation-page-section-container">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="survey-creation-page-secion-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sections.map((section, i) => (
                    <Draggable key={i} draggableId={`id${i}`} index={i}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <SurveySection section={section as iSurvey} />
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div
          className="survey-creation-page-plus-container"
          onClick={() => addSection()}
        >
          <img
            src={plus}
            alt="add survey"
            className="survey-creation-page-plus_svg"
          />
        </div>
      </div>
    </div>
  );
}

export default SurveyCreationPage;
