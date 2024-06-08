import AnimalsQuestions from "./AnimalsQuestions";
import FoodNutritionQuestions from "./FoodNutrition";
import HabitatsQuestions from "./HabitatsQuestions";
import HumanBodyQuestions from "./HumanBodyQuestions";
import LifeCyclesQuestions from "./LifeCyclesQuestions";
import PlantsQuestions from "./PlantsQuestions";
import SensesQuestions from "./SenseQuestions";

const BiologyCategories = [
    { title: "Plants", route: "ReadyScreen", questions: PlantsQuestions },
    { title: "Animals", route: "ReadyScreen", questions: AnimalsQuestions },
    { title: "Human Body", route: "ReadyScreen", questions: HumanBodyQuestions },
    { title: "Habitats", route: "ReadyScreen", questions: HabitatsQuestions},
    { title: "Life Cycles", route: "ReadyScreen", questions: LifeCyclesQuestions },
    { title: "Food and Nutrition", route: "ReadyScreen", questions: FoodNutritionQuestions },
    { title: "Senses", route: "ReadyScreen", questions: SensesQuestions },
    // { title: "Ecosystem", route: "ReadyScreen", questions: EnvironmentalConservationQuestions },
];

export default BiologyCategories;
