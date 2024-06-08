// import BeliefQuestions from "./IsmalicQuestionData/BeliefQuestions";
import EthicsQuestions from "./IsmalicQuestionData/EthicsQuestions";
import GeographyQuestions from "./IsmalicQuestionData/GeographyQuestions";
import HistoryQuestions from "./IsmalicQuestionData/HistoryQuestions";
// import HolidayQuestions from "./IsmalicQuestionData/HolidaysQuestions";
import LeadersQuestions from "./IsmalicQuestionData/LeadersQuestions";
import LiteratureQuestions from "./IsmalicQuestionData/LiteratureQuestions";
import ProphetQuestions from "./IsmalicQuestionData/ProphetsQuestion";
import QuranQuestions from "./IsmalicQuestionData/QuranQuestions";
import ScienceQuestions from "./IsmalicQuestionData/ScienceQuestions";

const IslamicCategories = [
    // { title: "Beliefs", route: "ReadyScreen", questions: BeliefQuestions},
    { title: "Prophets", route: "ReadyScreen", questions: ProphetQuestions },
    { title: "Quran", route: "ReadyScreen", questions: QuranQuestions},
    // { title: "Holidays", route: "ReadyScreen", questions: HolidayQuestions},
    { title: "Ethics", route: "ReadyScreen", questions:EthicsQuestions},
    { title: "History", route: "ReadyScreen", questions:HistoryQuestions},
    { title: "Geography", route: "ReadyScreen", questions: GeographyQuestions },
    { title: "Science", route: "ReadyScreen", questions: ScienceQuestions },
    { title: "Leaders", route: "ReadyScreen", questions: LeadersQuestions},
    { title: "Literature", route: "ReadyScreen", questions: LiteratureQuestions}
];
export default IslamicCategories;
