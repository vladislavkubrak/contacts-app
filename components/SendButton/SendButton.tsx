import React, { FC } from "react";
import { ISendButton } from "./types";
import * as Styled from "./styled";
import { Arrow } from "../icons/Arrow/Arrow";
import { Text } from "react-native";

export const SendButton: FC<ISendButton> = ({ style, onPress }) => {
	return (
		<Styled.SendButton onPress={onPress} style={style}>
			<Styled.Icon>
				<Arrow />
			</Styled.Icon>
		</Styled.SendButton>	
	);
}