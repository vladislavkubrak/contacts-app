import React, { useContext } from 'react';
import { HeaderButton } from './components/HeaderButton/HeaderButton';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Colors } from './constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Plus } from './components/icons/Plus/Plus';
import { NavigationProp } from '@react-navigation/native';
import { IRootStack } from './types';
import { Context } from './context';
import { ColorIcon } from './components/icons/ColorIcon/ColorIcon';


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
	headerLeft: () => {
		const context = useContext(Context)

		const changeLanguage = () => {
			context.setLanguage(context.language === 'en' ? 'fr' : 'en');
		}
		const changeColorScheme = () => {
			context.setColorScheme(context.colorScheme === Colors.general.purple ? Colors.general.blue : Colors.general.purple);
		}
		
		return (
			<>
				<HeaderButton
					title={(context.language === 'en' ? 'fr' : 'en').toUpperCase()}
					onPress={changeLanguage}
					color={Colors.general.white}
					style={{ marginRight: 10, width: 30 }}
				/>
				<HeaderButton
					onPress={changeColorScheme}
					color={Colors.general.white}
					width={24}
					height={24}
					Icon={ { Component: ColorIcon, color: context.colorScheme } }
				/>
          </>
		);
		
		
		
	
	},
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
}

export const ChatOptions: NativeStackNavigationOptions = {

}