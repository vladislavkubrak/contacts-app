import React, { FC, useEffect, useRef, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { INewContact } from './types';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styled';
import { NavigationProp } from '@react-navigation/native';
import { IRootStack } from '../../../types';
import { Colors } from '../../../constants/Colors';
import { HeaderButton } from '../../../components/HeaderButton/HeaderButton';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from '../../../components/Input/Input';
import { createUser } from '../../../databaseMethods';

export const NewContact: FC<INewContact> = () => {
	const [isFormFilled, setIsFormFilled] = useState(false);
	const navigation = useNavigation<NavigationProp<IRootStack, 'Contacts'>>();
	const handleNavigate = () => navigation.navigate('Contacts');
	const [name, changeName] = useState('');
	const [surname, changeSurname] = useState('');
	const [phone, changePhone] = useState('');
	const nameRef = useRef('');
	const surnameRef = useRef('');
	const phoneRef = useRef('');

	useEffect(() => {
		if (name && surname && phone) setIsFormFilled(true);
		else setIsFormFilled(false);
	}, [name, surname, phone]);
	
	const handleDone = async () => {
		await createUser(nameRef.current, surnameRef.current, phoneRef.current);
		handleNavigate();
	}

	useEffect(() => {
		nameRef.current = name;
	}, [name]);
	
	useEffect(() => {
		surnameRef.current = surname;
	}, [surname]);
	
	useEffect(() => {
		phoneRef.current = phone;
	}, [phone]);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <HeaderButton title='Done' onPress={isFormFilled ? handleDone : undefined} color={isFormFilled ? Colors.secondary.purple : Colors.secondary.gray} />,
		});
	}, [navigation, isFormFilled]);
	
	
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaProvider>
				<SafeAreaView>
					<Styled.NewContact>
						<Styled.UserIcon />
							<Input placeholder='Name' value={name} onChangeText={changeName} />
							<Input placeholder='Surname' value={surname} onChangeText={changeSurname} />
							<Input keyboardType='phone-pad' placeholder='Phone' value={phone} onChangeText={changePhone} />
					</Styled.NewContact>
				</SafeAreaView>
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	);
}

