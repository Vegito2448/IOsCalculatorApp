import { useRef, useState } from "react";
enum Operators {
	plus = "+",
	minus = "-",
	multiply = "x",
	divide = "/",
}
export const useCalculator = () => {
	const [beforeNumber, setBeforeNumber] = useState("0");
	const [number, setNumber] = useState("100");
	const lastOperation = useRef<Operators>();

	const clean = () => {
		setNumber("0");
		setBeforeNumber("0");
	};
	const buildNumber = (textNumber: string) =>
		setNumber((prevNumber) => {
			// don't accept double point
			if (prevNumber.includes(".") && textNumber === ".") return prevNumber;
			if (prevNumber.startsWith("0") || prevNumber.startsWith("-0")) {
				// decimal point
				if (
					textNumber === "." ||
					(textNumber === "0" && prevNumber.includes("."))
				)
					return prevNumber + textNumber;

				// another zero and there is no point
				if (textNumber !== "0" && !prevNumber.includes(".")) return textNumber;

				// avoid 000.0
				if (textNumber === "0" && !prevNumber.includes(".")) return prevNumber;

				return prevNumber;
			}
			return prevNumber + textNumber;
		});

	const positiveNegative = () =>
		setNumber((prevNumber) => {
			if (prevNumber.includes("-")) {
				return prevNumber.replace("-", "");
			} else {
				return `-${prevNumber}`;
			}
		});

	const deleteButton = () =>
		setNumber((prevNumber) => {
			if (
				prevNumber.length === 1 ||
				(prevNumber.includes("-") && prevNumber.length === 2)
			)
				return "0";
			return prevNumber.slice(0, -1);
		});

	const changeNumberToBeforeNumber = () =>
		setNumber((prevNumber) => {
			const number = prevNumber.endsWith(".")
				? prevNumber.slice(0, -1)
				: prevNumber;
			setBeforeNumber(number);
			return "0";
		});

	const divideButton = () => {
		changeNumberToBeforeNumber();
		lastOperation.current = Operators.divide;
	};
	const multiplyButton = () => {
		changeNumberToBeforeNumber();
		lastOperation.current = Operators.multiply;
	};
	const minusButton = () => {
		changeNumberToBeforeNumber();
		lastOperation.current = Operators.minus;
	};
	const plusButton = () => {
		changeNumberToBeforeNumber();
		lastOperation.current = Operators.plus;
	};

	const calculate = () => {
		const numberOne = Number(number);
		const numberTwo = Number(beforeNumber);
		switch (lastOperation.current) {
			case Operators.plus:
				setNumber(`${Number(numberOne + numberTwo)}`);
				break;
			case Operators.minus:
				setNumber(`${Number(numberTwo - numberOne)}`);
				break;
			case Operators.multiply:
				setNumber(`${Number(numberOne * numberTwo)}`);
				break;
			case Operators.divide:
				setNumber(`${Number(numberTwo / numberOne)}`);
				break;
			default:
				break;
		}
		setBeforeNumber("0");
	};
	return {
		beforeNumber,
		number,
		clean,
		buildNumber,
		positiveNegative,
		deleteButton,
		divideButton,
		multiplyButton,
		minusButton,
		plusButton,
		calculate,
	};
};
