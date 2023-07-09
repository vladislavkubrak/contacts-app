import React, { FC } from "react";
import { Button, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import * as Styled from "./styled";
import { IHeaderButton } from "./types";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

export const HeaderButton: FC<IHeaderButton> = ({ color = Colors.general.white, title = '', Icon, width = 'auto', height = 'auto', position = 'right', onPress, style }) => {
	const ButtonIcon = Icon ? <Icon.Component size={Icon?.size} color={Icon?.color || color} /> : null;

	const touchableOpacityStyle: StyleProp<ViewStyle> = StyleSheet.flatten([
		{
		  marginRight: position === 'right' ? 0 : 0,
		  marginLeft: position === 'left' ? 0 : 0,
		  marginBottom: 'auto',
		  marginTop: 'auto',
		},
		style,
	]);

	return (
		<TouchableOpacity disabled={!onPress ? true : false} style={touchableOpacityStyle} onPress={onPress}>
			<Styled.HeaderButton width={width === 'auto' ? 'auto' : width + 'px'} height={height === 'auto' ? 'auto' : height + 'px'}>
				{ButtonIcon}
				{title ? <Styled.HeaderButtonText color={color}>{title}</Styled.HeaderButtonText> : null}
			</Styled.HeaderButton>
		</TouchableOpacity>
	);
};