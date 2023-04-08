import { Text, View } from "react-native";
import CalculatorButton from "../components/CalculatorButton";
import { useCalculator } from "../hooks/useCalculator";
import { styles } from "../theme/appTheme";

export default function CalculatorScreen() {
	const {
		number,
		beforeNumber,
		clean,
		positiveNegative,
		deleteButton,
		buildNumber,
		divideButton,
		multiplyButton,
		minusButton,
		plusButton,
		calculate,
	} = useCalculator();
	return (
		<View style={styles.containerCalculator}>
			{beforeNumber !== "0" && (
				<Text style={styles.smallResult}>{beforeNumber}</Text>
			)}
			<Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
				{number}
			</Text>
			{/* Buttons Row */}
			<View style={styles.row}>
				{/* Buttons */}
				<CalculatorButton text="C" color="#9B9B9B" action={clean} />
				<CalculatorButton
					text="+/-"
					color="#9B9B9B"
					action={positiveNegative}
				/>
				<CalculatorButton text="del" action={deleteButton} color="#9B9B9B" />
				<CalculatorButton text="/" action={divideButton} color="#FF9427" />
				{/* #2d2d2d GrayDark */}
				{/* #FF9427 Orange */}
			</View>
			{/* Buttons Row */}
			<View style={styles.row}>
				{/* Buttons */}
				<CalculatorButton text="7" action={buildNumber} />
				<CalculatorButton text="8" action={buildNumber} />
				<CalculatorButton text="9" action={buildNumber} />
				<CalculatorButton text="x" action={multiplyButton} color="#FF9427" />
			</View>
			{/* Buttons Row */}
			<View style={styles.row}>
				{/* Buttons */}
				<CalculatorButton text="4" action={buildNumber} />
				<CalculatorButton text="5" action={buildNumber} />
				<CalculatorButton text="6" action={buildNumber} />
				<CalculatorButton text="-" action={minusButton} color="#FF9427" />
			</View>
			{/* Buttons Row */}
			<View style={styles.row}>
				{/* Buttons */}
				<CalculatorButton text="1" action={buildNumber} />
				<CalculatorButton text="2" action={buildNumber} />
				<CalculatorButton text="3" action={buildNumber} />
				<CalculatorButton text="+" action={plusButton} color="#FF9427" />
			</View>
			{/* Buttons Row */}
			<View style={styles.row}>
				{/* Buttons */}
				<CalculatorButton text="0" width={true} action={buildNumber} />
				<CalculatorButton text="." action={buildNumber} />
				<CalculatorButton text="=" action={calculate} />
			</View>
		</View>
	);
}
