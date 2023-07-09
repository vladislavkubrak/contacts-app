// System
import React, { FC, useContext, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Components
import { ContactPreview } from './ContactPreview/ContactPreview';

// Others
import { IContacts } from './types';
import { Colors } from '../../constants/Colors';
import { getAllUsers } from '../../databaseMethods';
import { Context } from '../../context';
import { content } from '../../content';

// Style
import * as Styled from './styled';


export const Contacts: FC<IContacts> = ({ navigation }) => {
	const [contacts, setContacts] = React.useState([]);
	const { colorScheme, language } = useContext(Context);
	const { title } = content[language].screens.Contacts

	useEffect(() => {
		navigation.setOptions({
			headerStyle: {
				backgroundColor: colorScheme,
			},
			headerTitle: title,
		});
	}, [navigation, colorScheme, language])

	useEffect(() => {
		getAllUsers().then((res) => setContacts(res));
	}, [contacts]);

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Styled.Contacts 
					style={{ borderTopWidth: 1, borderTopColor: Colors.secondary.gray }} 
					data={contacts} 
					renderItem={({ item }: { item: any }) => <ContactPreview id={item.id} name={item.name} surname={item.surname} shortName={item.shortName} />}  
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
