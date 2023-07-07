import { StackNavigationProp } from '@react-navigation/stack';
import { IRootStack } from '../../types';

export interface IContacts {
	navigation: StackNavigationProp<IRootStack, 'Contacts'>;
}
