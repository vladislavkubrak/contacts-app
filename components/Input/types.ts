import { KeyboardTypeOptions } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';


export interface IInput {
	style?: StyleProp<ViewStyle>;
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	keyboardType?: KeyboardTypeOptions;
}
