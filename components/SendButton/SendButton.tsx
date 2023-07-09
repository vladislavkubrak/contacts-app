import React, { FC, useContext } from "react";
import { ISendButton } from "./types";
import * as Styled from "./styled";
import { Arrow } from "../icons/Arrow/Arrow";
import { Text } from "react-native";
import { Context } from "../../context";

export const SendButton: FC<ISendButton> = ({ style, onPress }) => {
	const { colorScheme } = useContext(Context);

	return (
		<Styled.SendButton color={colorScheme} onPress={onPress} style={style}>
			<Styled.Icon>
				<Arrow />
			</Styled.Icon>
		</Styled.SendButton>	
	);
}