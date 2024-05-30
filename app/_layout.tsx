import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home-screen";
import NotFoundScreen from "./not-found";
import { HomeScreenTitle } from "@/components/home-screen/home-screen-title";
import { NavToSettings } from "@/components/home-screen/nav-to-settings";
import { Colors } from "@/constants/Colors";
import SettingsScreen from "./settings-screen";
import { NavToHome } from "@/components/settings-screen/nav-to-home";

export enum RouteNames {
  HomeScreen = "home-screen",
  NotFoundScreen = "not-found",
  Settings = "settings-screen",
}

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
        <Stack.Screen
          name={RouteNames.HomeScreen}
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: () => <HomeScreenTitle />,
            headerRight: () => <NavToSettings navigation={navigation} />,
            headerTintColor: Colors[colorScheme || "light"].tint,
          })}
        />
        <Stack.Screen
          name={RouteNames.NotFoundScreen}
          component={NotFoundScreen}
        />
        <Stack.Screen
          name={RouteNames.Settings}
          component={SettingsScreen}
          options={({ navigation }) => ({
            headerTitle: () => <Text>Настройки</Text>,
            headerLeft: () => <NavToHome navigation={navigation} />,
            headerTintColor: Colors[colorScheme || "light"].tint,
          })}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
