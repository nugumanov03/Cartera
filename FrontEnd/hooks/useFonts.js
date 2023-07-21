import * as Font from "expo-font";

export const useFonts = async () => {
  await Font.loadAsync({
    Quicksand: require("../assets/fonts/Quicksand.ttf"),
    QuicksandB: require("../assets/fonts/Quicksand-Bold.ttf"),
    // PoppinsRegular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    // WorkSansRegular: require("../assets/fonts/WorkSans/WorkSans-Regular.ttf"),
  });
};
