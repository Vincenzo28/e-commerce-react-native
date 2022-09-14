import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ClothingScreen from "./screens/ClothingScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import JewerlyScreen from "./screens/JewerlyScreen";
import ProductPage from "./screens/ProductPage";
import PaymentScreen from "./screens/PaymentScreen";
import PaymentSuccess from "./screens/PaymentSuccess";
import IntroductionScreen from "./screens/IntroductionScreen";
import SignUp from "./screens/SignUpScreen";
import SignIn from "./screens/SignInScreen";
import LoadingAuth from "./screens/LoadingAuth";
import HeaderButton from "./components/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { retrieveData, logout } from "./store/actions/authUser";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const dispatch = useDispatch()
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0EC99C" },
        headerBackTitle: "",
      }}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderButton
              onPressRight={() => dispatch(logout())}
            />
          ),
        })}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Abbigliamento" component={ClothingScreen} />
      <Stack.Screen name="Elettronica" component={ElectronicsScreen} />
      <Stack.Screen name="Gioielleria" component={JewerlyScreen} />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.title,
        })}
        name="Info"
        component={ProductPage}
      />
      <Stack.Screen name="Pagamento" component={PaymentScreen} />
      <Stack.Screen name="Grazie!" component={PaymentSuccess} />
    </Stack.Navigator>
  );
};

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = "home-sharp";
          } else if (route.name === "Profilo") {
            iconName = "person";
          } else if (route.name === "Carrello") {
            iconName = "cart";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0EC99C",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{ title: "" }}
        name="home"
        component={StackNavigation}
      />
      <Tab.Screen
        options={{ title: "" }}
        name="Carrello"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Introduction" component={IntroductionScreen} />
      <Stack.Screen name="Iscriviti" component={SignUp} />
      <Stack.Screen name="Accedi" component={SignIn} />
    </Stack.Navigator>
  );
};

function MainNavigation() {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setIsLoading(true);
    dispatch(retrieveData()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);
  const userToken = useSelector((state) => state.authUser.token);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingAuth />
      ) : userToken ? (
        <TabNavigation />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
}

export default MainNavigation;
