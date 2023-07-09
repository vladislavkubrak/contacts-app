// System
import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp } from '@react-navigation/native';
import { ContextProvider } from './context';

// Components
import { Loading } from './screens/Loading/Loading';
import { Contacts } from './screens/Contacts/Contacts';
import { Contact } from './screens/Contacts/Contact/Contact';
import { NewContact } from './screens/Contacts/NewContact/NewContact';
import { Chat } from './screens/Chat/Chat';

// Other
import { IRootStack } from './types';
import * as options from './options'; 
import { useLastActiveTime } from './hooks/useLastActiveTime';

const Stack = createNativeStackNavigator<IRootStack>();

  
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
