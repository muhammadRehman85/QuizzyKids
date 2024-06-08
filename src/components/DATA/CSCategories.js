import CodingConceptsQuestions from "./CSQuestionData/CodingConceptsQuestions";
import ComputerBasicsQuestions from "./CSQuestionData/ComputerBasicsQuestions";
import CyberSecurityBasicQuestions from "./CSQuestionData/CyberSecurityBasicsQuestions";
import DataScQuestions from "./CSQuestionData/DataScQuestions";
import InternetBasicsQuestions from "./CSQuestionData/InternetBasicQuestions";
import SoftwareBasicQuestions from "./CSQuestionData/SoftwareBasicQuestions";
import NetworkQuestions from "./CSQuestionData/networkQuestions";
import WebQuestions from "./CSQuestionData/webQuestions";

const CSCategories = [
    { title: "Computer Basics", route: "ReadyScreen", questions: ComputerBasicsQuestions },
    { title: "Coding Concepts", route: "ReadyScreen", questions: CodingConceptsQuestions },
    { title: "Internet Basics", route: "ReadyScreen", questions: InternetBasicsQuestions},
    { title: "Software Basics", route: "ReadyScreen", questions: SoftwareBasicQuestions},
    { title: "Cybersecurity Basics", route: "ReadyScreen", questions: CyberSecurityBasicQuestions },
    { title: "Web Development", route: "ReadyScreen", questions: WebQuestions },
    { title: "Network Basics", route: "ReadyScreen", questions: NetworkQuestions },
    { title: "Data Science", route: "ReadyScreen", questions: DataScQuestions},
   
];
export default CSCategories;
