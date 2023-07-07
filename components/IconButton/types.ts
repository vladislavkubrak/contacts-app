import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface IIconButton {
	text: string;
	Icon: ReactNode;
	style?: StyleProp<ViewStyle>;
	onPress?: () => void;
}

