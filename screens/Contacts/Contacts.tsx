import React, { FC, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ContactPreview } from './ContactPreview/ContactPreview';
import { IContacts } from './types';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styled';
import { FlatList } from 'react-native';
import { IContactPreview } from './ContactPreview/types';
import { Colors } from '../../constants/Colors';
import { getAllUsers } from '../../databaseMethods';

const DATA = [
	{ id: 1, name: 'Vlad', surname: 'Kuznetsov', phone: '0874783736' },
	{ id: 2, name: 'Alena', surname: 'Apina', phone: '8377373783' },
	{ id: 3, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 4, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 5, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 6, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 7, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 8, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 9, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 10, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 11, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 12, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 13, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 14, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 15, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 16, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 17, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 18, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 19, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
	{ id: 20, name: 'Rebeca', surname: 'Jaba', phone: '7832724682' },
];

export const Contacts: FC<IContacts> = ({ navigation }) => {
	const [contacts, setContacts] = React.useState([]);

	useEffect(() => {
		getAllUsers().then((res) => setContacts(res));
	}, [contacts]);

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Styled.Contacts style={{ borderTopWidth: 1, borderTopColor: Colors.secondary.gray }} data={contacts} renderItem={({ item }: { item: any }) => <ContactPreview id={item.id} name={item.name} surname={item.surname} />}  />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
