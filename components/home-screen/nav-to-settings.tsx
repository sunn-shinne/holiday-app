import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { RouteNames } from "@/app/_layout";
import { useNavigation } from "@react-navigation/native";

interface INavToSettingsProps {
  navigation: any;
}

export const NavToSettings = ({ navigation }: INavToSettingsProps) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      style={s.wrapper}
      onPress={() => navigation.navigate(RouteNames.Settings)}
    >
      <Ionicons
        size={24}
        name="settings"
        color={Colors[colorScheme || "light"].icon}
      />
    </Pressable>
  );
};

const s = StyleSheet.create({
  wrapper: {
    marginHorizontal: 12,
  },
});
