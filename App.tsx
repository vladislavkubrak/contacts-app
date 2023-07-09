import React, { FC, useState, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContextProvider } from './context';
import { AppState } from 'react-native';

import { NavigationProp } from '@react-navigation/native';
import { Loading } from './screens/Loading/Loading';
import { Contacts } from './screens/Contacts/Contacts';
import { Contact } from './screens/Contacts/Contact/Contact';
import { NewContact } from './screens/Contacts/NewContact/NewContact';
import { Chat } from './screens/Chat/Chat';

import { IRootStack } from './types';
import * as options from './options'; 

const Stack = createNativeStackNavigator<IRootStack>();

const useLastActiveTime = () => {
	const [lastActiveTime, setLastActiveTime] = useState<Date | null>(null);
	const [isInBackground, setIsInBackground] = useState<boolean>(false);
	const [minutes, setMinutes] = useState<number>(0);
	const [isShow, setIsShow] = useState<boolean>(false);

	useEffect(() => {
		const handleAppStateChange = (state: string) => {
			setIsInBackground(state !== 'active');
			if (state === 'active') {
			setLastActiveTime(new Date());
			}
		};

		AppState.addEventListener('change', handleAppStateChange);
	}, []);
  
	useEffect(() => {
		if (!isInBackground && lastActiveTime) {
			const currentTime = new Date();
			setMinutes(Math.floor((currentTime.getTime() - lastActiveTime.getTime()) / (1000 * 60)));
		}
	}, [lastActiveTime, isInBackground]);

	
	useEffect(() => {
		if (!isInBackground) {
			setIsShow(true);
		}
	}, [isInBackground]);
	
	useEffect(() => {
		if (isShow && +minutes > 0) {
			Alert.alert(`Minutes: ${minutes}`);
			setIsShow(false);
		}
	}, [isShow, minutes]);
};
  
  
  
  
  

const App: FC<{ navigation: NavigationProp<IRootStack> }> = ({ navigation }) => {
	useLastActiveTime();

	return (
		<ContextProvider>
			<NavigationContainer>
				<StatusBar hidden />
				<Stack.Navigator initialRouteName="Loading" screenOptions={options.GeneralOptions} >
					<Stack.Screen name="Loading" options={options.LoadingOptions} component={Loading} />
					<Stack.Screen name="Contacts" options={options.ContactsOptions} component={Contacts} />
					<Stack.Screen name="Contact" options={options.ContactOptions} component={Contact} />
					<Stack.Group screenOptions={{ presentation: 'modal' }}>
						<Stack.Screen name="New Contact" options={options.NewContactOptions} component={NewContact} />
					</Stack.Group>
					<Stack.Screen name="Chat" component={Chat} options={options.ChatOptions} />
				</Stack.Navigator>
			</NavigationContainer>
		</ContextProvider>
	);
}

export default App;
