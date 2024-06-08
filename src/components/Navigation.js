import { createStackNavigator } from "@react-navigation/stack"; 
import HomeScreen from "../screens/HomeScreen";
import ReadyScreen from "../screens/ReadyScreen";
import Quiz_Questions from "../screens/Quiz_Questions";
import Result from "../screens/Result";
import login from "../screens/login";
import RegistrationScreen from "../screens/RegistrationScreen";
import CategroiesScreen from "../screens/CategroiesScreen";
import Profile from "../screens/Profile";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
    <Stack.Screen name="login" component={login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ReadyScreen" component={ReadyScreen} />
   <Stack.Screen name="Profile" component={Profile} />
       <Stack.Screen name="CategoriesScreen" component={CategroiesScreen} />
       <Stack.Screen name="Quiz_Questions" component={Quiz_Questions} />
 <Stack.Screen name="Result" component={Result} />
       <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} /> 
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default Navigation;
