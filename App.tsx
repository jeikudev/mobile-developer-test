import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SubmitScreen from "./src/screens/SubmitScreen";
import ViewSubmissionScreen from "./src/screens/ViewSubmissionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Submit">
          <Stack.Screen name="Submit" component={SubmitScreen} />
          <Stack.Screen
            name="View"
            component={ViewSubmissionScreen}
            options={{ title: "View Submission" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
