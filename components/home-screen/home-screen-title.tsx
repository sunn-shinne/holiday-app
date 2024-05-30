import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const HomeScreenTitle = () => {
  return (
    <View style={s.title}>
      <Text>Что празднуем?</Text>
      <Image
        style={s.titleLogo}
        source={require("../../assets/images/logo.png")}
      />
    </View>
  );
};

const s = StyleSheet.create({
  title: {
    flexDirection: "row",
    gap: 4,
    alignItems: "flex-end",
  },
  titleLogo: {
    width: 16,
    height: 16,
  },
});
