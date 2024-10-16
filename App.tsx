import { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import StartGameScreen from "@/screens/StartGameScreen";
import GameScreen from "@/screens/GameScreen";
import GameOverScreen from "@/screens/GameOverScreen";
import Colors from "@/constants/colors";

// Keep the splash screen visible while resources are being fetched
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [countOfRounds, setCountOfRounds] = useState<number>(0);

  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("@/assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const pickNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setCountOfRounds(numberOfRounds);
    setIsGameOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setIsGameOver(false);
    setCountOfRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (userNumber && isGameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        countOfRounds={countOfRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  if (!loaded && !error) return null;

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.surface600, Colors.surfaceMixed600]}
    >
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.1 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
