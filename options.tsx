import React from 'react';
import { HeaderButton } from './components/HeaderButton/HeaderButton';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Colors } from './constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Plus } from './components/icons/Plus/Plus';
import { NavigationProp } from '@react-navigation/native';
import { IRootStack } from './types';

export const GeneralOptions: NativeStackNavigationOptions = {
	headerStyle: { 
		backgroundColor: Colors.general.purple 
	}, 
	headerTintColor: Colors.general.white, 
	headerTitleStyle: { 
		fontWeight: 'bold', 
		fontSize: 20 
	}
}

export const LoadingOptions: NativeStackNavigationOptions = {
	headerShown: false
}

export const ContactsOptions: NativeStackNavigationOptions = {
	headerRight: () => {
		const navigation = useNavigation<NavigationProp<IRootStack, 'Contacts'>>();
		const handleNavigate = () => navigation.navigate('New Contact');

		return <HeaderButton onPress={handleNavigate} color={Colors.general.white} width={24} height={24} Icon={ { Component: Plus } } />
	}
}

export const ContactOptions: NativeStackNavigationOptions = {

}

export const NewContactOptions: NativeStackNavigationOptions = {
	headerStyle: { 
		backgroundColor: Colors.general.gray 
	}, 
	headerTintColor: Colors.general.black, 
	headerLeft: () => {
		const navigation = useNavigation<NavigationProp<IRootStack, 'New Contact'>>();
		const handleNavigate = () => navigation.navigate('Contacts');

		return <HeaderButton title='Cancel' onPress={handleNavigate} color={Colors.secondary.purple} />
	}
}

export const ChatOptions: NativeStackNavigationOptions = {

}