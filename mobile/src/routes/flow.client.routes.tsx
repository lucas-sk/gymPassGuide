import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SigninClient } from "@screens/SigninClient";
import { SignUpClient } from "@screens/SignUpClient";

type ClientRoutes = {
  SigninClient: undefined;
  SignUpClient: undefined;
};

export type ClientRoutesProps = NativeStackNavigationProp<ClientRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<ClientRoutes>();

export function FlowClientRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SigninClient" component={SigninClient} />
      <Screen name="SignUpClient" component={SignUpClient} />
    </Navigator>
  );
}
