import React, { FC } from "react";
import { Colors } from "../../constants/Colors";
import { IInput } from "./types";
import * as Styled from "./styled";

export const Input: FC<IInput> = ({ style, placeholder, value, onChangeText, keyboardType = 'default', onFocus }) => {
	const handleText = (text: string) => {
		if (keyboardType === 'phone-pad') {
			onChangeText(text.replace(/\D/g, ''));
		} else {
			onChangeText(text);
		}
	};

	return (	
		<Styled.Input onFocus={onFocus} style={style} placeholderTextColor={Colors.other.placeholder} keyboardType={keyboardType} placeholder={placeholder} value={value} onChangeText={handleText} />
	);
}