import ActivePassiveQuestions from "./EnglishQuestionData/ActivePassiveQuestion";
import AdjectiveQuestion from "./EnglishQuestionData/AdjectiveQuestion";
import AdverbQuestion from "./EnglishQuestionData/AdverbQuestion";
import ColorshapeQuestion from "./EnglishQuestionData/ColorshapQuestion";
import ConjunctionQuestion from "./EnglishQuestionData/ConjunctionQuestion";
import InterjectionQquestion from "./EnglishQuestionData/InterjectionQuestion";
import NounQuestion from "./EnglishQuestionData/NounQuestion";
import PrepositionQuestion from "./EnglishQuestionData/PrepositionQuestion";
import PronounQuestion from "./EnglishQuestionData/PronounQuestion";
import TensesQuestion from "./EnglishQuestionData/TensesQuestion";
import VerbQuestion from "./EnglishQuestionData/VerbQuestion";
import VocabularyQuestion from "./EnglishQuestionData/VocabularyQuestion";

const EngCategories = [
    // { title: "Alphabet Recognition", route: "ReadyScreen", questions: BasicQuestions },
    { title: "Basic Vocabulary", route: "ReadyScreen", questions: VocabularyQuestion},
    { title: "Colors and Shapes", route: "ReadyScreen", questions: ColorshapeQuestion }, 
    { title: "Noun", route: "ReadyScreen", questions: NounQuestion },
    { title: "Pronoun", route: "ReadyScreen", questions: PronounQuestion },
    { title: "Adjective", route: "ReadyScreen", questions: AdjectiveQuestion },
    { title: "Verb", route: "ReadyScreen", questions: VerbQuestion },
    { title: "Adverb", route: "ReadyScreen", questions: AdverbQuestion},
    { title: "Preposition", route: "ReadyScreen", questions: PrepositionQuestion },
    { title: "Conjunction", route: "ReadyScreen", questions: ConjunctionQuestion },
    { title: "Interjection", route: "ReadyScreen", questions: InterjectionQquestion },
    { title: "Tenses", route: "ReadyScreen", questions: TensesQuestion },
    { title: "Active & Passive Voice", route: "ReadyScreen", questions: ActivePassiveQuestions },
    // { title: "Direct & Indirect Narration", route: "ReadyScreen", question}
  ];
  export default EngCategories;