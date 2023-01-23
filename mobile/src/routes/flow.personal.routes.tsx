import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SigninPersonalTrainer } from "@screens/SigninPersonalTrainer";
import { SignUpPersonalTainer } from "@screens/SignUpPersonalTainer";

type PersonalRoutes = {
  SigninPersonalTrainer: undefined;
  SignUpPersonalTainer: undefined;
};

export type PersonalRoutesProps =
  NativeStackNavigationProp<PersonalRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<PersonalRoutes>();

export function FlowPersonalRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SigninPersonalTrainer" component={SigninPersonalTrainer} />
      <Screen name="SignUpPersonalTainer" component={SignUpPersonalTainer} />
    </Navigator>
  );
}
