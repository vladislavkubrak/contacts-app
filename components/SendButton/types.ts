import { StyleProp, ViewStyle } from 'react-native';

export interface ISendButton {
	style?: StyleProp<ViewStyle>;
	onPress: () => void;
}