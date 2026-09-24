import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link href={"/onboarding"} className="p-4 mt-4 bg-primary rounded-4xl text-white">Go to Onboarding</Link>
      <Link href={"/(auth)/sign-in"} className="p-4 mt-4 bg-primary rounded-4xl text-white">Go to Sign In</Link>
      <Link href={"/(auth)/sign-up"} className="p-4 mt-4 bg-primary rounded-4xl text-white">Go to Sign Up</Link>

      <Link href={"/subscriptions/spotify"}>Spotify Subscription</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id: "claude"}
      }}>Claude Max Subscription</Link>
    </SafeAreaView>
  );
}