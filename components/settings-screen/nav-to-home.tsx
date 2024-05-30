import React from "react";
import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

interface INavToHomeProps {
  navigation: any;
}

export const NavToHome = ({ navigation }: INavToHomeProps) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable style={s.wrapper} onPress={() => navigation.goBack()}>
      <AntDesign
        name="arrowleft"
        size={24}
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
