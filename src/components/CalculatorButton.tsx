import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/appTheme";
interface Props {
	text: string;
	color?: string;
	width?: boolean;
	action: (textNumber: string) => void;
}
const CalculatorButton = ({
	text = "",
	color = "#2d2d2d",
	width = false,
	action = () => void 0,
}: Props) => {
	return (
		<TouchableOpacity onPress={() => action(text)}>
			<View
				style={{
					...styles.button,
					backgroundColor: color,
					width: width ? 180 : 80,
				}}
			>
				<Text
					style={{
						...styles.textButton,
						color: color === "#9B9B9B" ? "black" : "white",
					}}
				>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CalculatorButton;
