import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { SignUpClient } from "@screens/SignUpClient";
import { Center } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { Platform } from "react-native";
import { FlowClientRoutes } from "./flow.client.routes";
import { FlowPersonalRoutes } from "./flow.personal.routes";

const Tab = createMaterialTopTabNavigator();

export function AuthRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#00875F",
        tabBarIndicatorStyle: {
          backgroundColor: "#00875F",
        },
        tabBarStyle: {
          backgroundColor: "#121214",
          marginTop: Platform.OS === "ios" ? 50 : 25,
        },
      }}
    >
      <Tab.Screen
        name="FlowClientRoutes"
        component={FlowClientRoutes}
        options={{
          tabBarLabel: "Cliente",
        }}
      />

      <Tab.Screen
        name="FlowPersonalRoutes"
        component={FlowPersonalRoutes}
        options={{
          tabBarLabel: "Personal",
        }}
      />
    </Tab.Navigator>
  );
}
