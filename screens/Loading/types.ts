import { StackNavigationProp } from '@react-navigation/stack';
import { IRootStack } from '../../types';

export interface ILoading {
	navigation: StackNavigationProp<IRootStack, 'Loading'>;
}