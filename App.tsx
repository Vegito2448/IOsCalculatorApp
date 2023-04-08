import { SafeAreaView, StatusBar } from "react-native";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import { styles } from "./src/theme/appTheme";

export default function App() {
	return (
		<SafeAreaView style={styles.background}>
			<StatusBar backgroundColor={"black"} barStyle={"light-content"} />
			<CalculatorScreen />
		</SafeAreaView>
	);
}
