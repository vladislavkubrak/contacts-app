import React, { FC, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ContactPreview } from './ContactPreview/ContactPreview';
import { IContacts } from './types';
import { Colors } from '../../constants/Colors';
import { getAllUsers } from '../../databaseMethods';
import * as Styled from './styled';

export const Contacts: FC<IContacts> = ({ navigation }) => {
	const [contacts, setContacts] = React.useState([]);

	useEffect(() => {
		getAllUsers().then((res) => setContacts(res));
	}, [contacts]);

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Styled.Contacts style={{ borderTopWidth: 1, borderTopColor: Colors.secondary.gray }} data={contacts} renderItem={({ item }: { item: any }) => <ContactPreview id={item.id} name={item.name} surname={item.surname} shortName={item.shortName} />}  />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
