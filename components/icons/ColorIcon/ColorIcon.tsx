import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { IColorIcon } from './types';
import { SIZE } from './constants';
import { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

export const ColorIcon: React.FC<IColorIcon> = ({ size = SIZE, color = Colors.general.white, style }) => {

	const colorIconStyle: StyleProp<ViewStyle> = StyleSheet.flatten([
		{
			width: size,
			height: size,
			backgroundColor: color,
			borderRadius: 100,
			borderStyle: 'solid',
			borderColor: Colors.general.white,
			borderWidth: 1,
		},
		style,
	]);

	return (
		<View style={colorIconStyle}>

		</View>
	);
};
