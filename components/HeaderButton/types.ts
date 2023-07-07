import React from "react";
import { StyleProp, ViewStyle } from 'react-native';

export interface IHeaderButton {
	width?: number | string;
	height?: number | string;
	position?: 'left' | 'right';
	color?: string;
	title?: string;
	Icon?: { 
		Component: React.ComponentType<{size?: number, color?: string, style?: StyleProp<ViewStyle> }>,
		size?: number,
		color?: string,
	};
	onPress?: () => void;
}