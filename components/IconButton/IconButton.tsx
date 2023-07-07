import React, { FC } from "react";
import { IIconButton } from "./types";
import * as Styled from "./styled";

export const IconButton: FC<IIconButton> = ({ text, Icon, style, onPress }) => {
	return (
		<Styled.IconButton onPress={onPress} style={style}>
			<Styled.Icon>
				{Icon}
			</Styled.Icon>
			<Styled.Text>{text}</Styled.Text>
		</Styled.IconButton>
	);
}