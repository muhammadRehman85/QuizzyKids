import InternationalEnvironmentQuestions from "./GKQuestionData/EnviromentQuestions";
import FamousPersonalitiesQuestions from "./GKQuestionData/FamousPersonalities";
import InternationalGeographyQuestions from "./GKQuestionData/GeographicQuestions";
import InternationalHistoryQuestions from "./GKQuestionData/HistoryQuestionData";
import MiscellaneousQuestions from "./GKQuestionData/MiscellanousQuestions";
import InternationalSportsQuestions from "./GKQuestionData/SportsQuestions";
import InternationalWorldRecordsQuestions from "./GKQuestionData/WorldRecords";

const GeneralKnowledgeCategories = [
    { title: "History", route: "ReadyScreen", questions: InternationalHistoryQuestions},
    { title: "Geography", route: "ReadyScreen", questions: InternationalGeographyQuestions },
    { title: "Environment", route: "ReadyScreen", questions:InternationalEnvironmentQuestions },
    { title: "Sports", route: "ReadyScreen", questions: InternationalSportsQuestions },
    { title: "Famous Personalities", route: "ReadyScreen", questions:FamousPersonalitiesQuestions},
    { title: "Languages", route: "ReadyScreen", questions:InternationalGeographyQuestions  },
    { title: "World Records", route: "ReadyScreen", questions: InternationalWorldRecordsQuestions },
    { title: "Miscellaneous", route: "ReadyScreen", questions: MiscellaneousQuestions}
];

export default GeneralKnowledgeCategories;
