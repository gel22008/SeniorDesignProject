import { Text, View } from "react-native";
import { useRouter, Redirect } from 'expo-router';

export default function Index() {
  return (
    <Redirect href="/(tabs)/dining" />
  );
}
