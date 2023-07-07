import React, { FC } from "react";
import { Button, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import * as Styled from "./styled";
import { IHeaderButton } from "./types";

export const HeaderButton: FC<IHeaderButton> = ({ color = Colors.general.white, title = '', Icon, width = 'auto', height = 'auto', position = 'right', onPress }) => {
	const ButtonIcon = Icon ? <Icon.Component size={Icon?.size} color={Icon?.color || color} /> : null;

	return (
		<TouchableOpacity disabled={!onPress ? true : false} style={{ marginRight: position === 'right' ? 0 : 0, marginLeft: position === 'left' ? 0 : 0, marginBottom: 'auto', marginTop: 'auto' }} onPress={onPress}>
			<Styled.HeaderButton width={width === 'auto' ? 'auto' : width + 'px'} height={height === 'auto' ? 'auto' : height + 'px'}>
				{ButtonIcon}
				{title ? <Styled.HeaderButtonText color={color}>{title}</Styled.HeaderButtonText> : null}
			</Styled.HeaderButton>
		</TouchableOpacity>
	);
};