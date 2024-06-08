import AIEthicsQuestions from "./AIQuestionsDAta/AIEthicsQuestions";
import ComputerVisionQuestions from "./AIQuestionsDAta/ComputerVisionQuestions";
import DeepLearningQuestions from "./AIQuestionsDAta/DeepLearningQuestions";
import ExpertSystemsQuestions from "./AIQuestionsDAta/ExpertSystemsQuestions ";
import MachineLearningQuestions from "./AIQuestionsDAta/MachineLearningQuestions";
import NLPQuestions from "./AIQuestionsDAta/NLPQuestions";
import ReinforcementLearningQuestions from "./AIQuestionsDAta/ReinforcementLearningQuestions";
import RoboticsQuestions from "./AIQuestionsDAta/RoboticsQuestions";

const AICategories = [
    { title: "Machine Learning", route: "ReadyScreen", questions: MachineLearningQuestions },
    { title: "Deep Learning", route: "ReadyScreen", questions: DeepLearningQuestions  },
    { title: "Natural Language Processing", route: "ReadyScreen", questions: NLPQuestions  },
    { title: "Computer Vision", route: "ReadyScreen", questions: ComputerVisionQuestions },
    { title: "Reinforcement Learning", route: "ReadyScreen", questions: ReinforcementLearningQuestions},
    { title: "AI Ethics", route: "ReadyScreen", questions: AIEthicsQuestions },
    { title: "Expert Systems", route: "ReadyScreen", questions: ExpertSystemsQuestions  },
    { title: "Robotics", route: "ReadyScreen", questions:RoboticsQuestions },
];

export default AICategories;
