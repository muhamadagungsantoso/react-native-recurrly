import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-bold">
        Home
      </Text>
      <Text className="text-7xl font-sans-bold">
        Home
      </Text>

      <Link href={"/onboarding"} className="p-4 mt-4 font-sans-bold bg-primary rounded text-white">Go to Onboarding</Link>
      <Link href={"/(auth)/sign-in"} className="p-4 mt-4 font-sans-bold bg-primary rounded text-white">Go to Sign In</Link>
      <Link href={"/(auth)/sign-up"} className="p-4 mt-4 font-sans-bold bg-primary rounded text-white">Go to Sign Up</Link>
    </SafeAreaView>
  );
}