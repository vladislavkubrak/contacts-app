import React, { FC, useEffect, useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { IRootStack } from '../../../types';
import { HeaderButton } from '../../../components/HeaderButton/HeaderButton';
import { Colors } from '../../../constants/Colors';
import * as Styled from './styled';
import { Chat } from '../../../components/icons/Chat/Chat';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Animated } from 'react-native';
import { useAnimate } from './useAnimate';
import { IconButton } from '../../../components/IconButton/IconButton';
import { TextInput } from 'react-native';
import { Delete } from '../../../components/icons/Delete/Delete';
import { ModalTwoOptions } from '../../../components/ModalTwoOptions/ModalTwoOptions';
import { deleteUser, editUser, getUserById } from '../../../databaseMethods';
import { useRefForValue } from '../../../hooks/useRefForValue';

export const Contact: FC<{}> = ({}) => {
	// Navigation
	const navigation = useNavigation<NavigationProp<IRootStack, 'Contact'>>();

	// Route
	const route = useRoute();
	const { id, isEdit } = route.params as { id: number, isEdit: boolean };

	// Inputs state
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	const [shortName, setShortName] = useState('');

	// Inputs refs
	const nameRef = useRefForValue(name);
	const surnameRef = useRefForValue(surname);
	const phoneRef = useRefForValue(phone);
	const shortNameRef = useRefForValue(shortName);


	const handlePhone = (text: string) => {
		setPhone(text.replace(/\D/g, ''))
	}

	// Get data
	useEffect(() => {
		const getData = async () => {
			await getUserById(id).then((user) => {
				setName(user.name);
				setSurname(user.surname);
				setPhone(user.phone);
				setShortName(user.shortName);
			});
			setFixData({ name: name, surname: surname, phone: phone });
		}
		getData();
	}, [id])

	// Check changes
	const [isHaveChanges, setIsHaveChanges] = useState(false);
	const [fixData, setFixData] = useState({ name: '', surname: '', phone: '' });
	const inputRef = useRef<TextInput>(null);
	const [isDelete, setIsDelete] = useState(false);
	const isCorrect = () => name && surname && phone ? true : false;

	useEffect(() => {
		if ((name !== fixData.name || surname !== fixData.surname || phone !== fixData.phone) && isCorrect()) setIsHaveChanges(true);
		else setIsHaveChanges(false);
	}, [name, surname, phone]);

	// Animation
	const { phonePosition, phoneScale, photoPosition, infoScale, buttonPosition, bgOpacity, animate } = useAnimate(isEdit);
	
	// Save changes
	const handleFinishNavigate = async () => {
		await editUser(id, nameRef.current, surnameRef.current, phoneRef.current);
		navigation.navigate('Contact', {id: id, isEdit: false});
		animate(false);
	};

	// Cancel changes
	const handleCancelNavigate = () => {
		setName(name);
		setSurname(surname);
		setPhone(phone);
		navigation.setOptions({ headerLeft: () => null });
		navigation.navigate('Contact', {id: id, isEdit: false});
		animate(false);
	};

	// Edit contact
	const handleEditNavigate = () => {
		if (inputRef && inputRef.current)
			(inputRef.current as any).focus(); // DOESNT WORK
		navigation.setOptions({ headerLeft: () => <HeaderButton title={`Cancel`} onPress={handleCancelNavigate} color={Colors.general.white} />});
		navigation.navigate('Contact', { id: id, isEdit: true });
		animate(true);
	};

	// Delete contact
	const handleDelete = (isDelete: boolean) => {
		return () => setIsDelete(isDelete);
	}
	const handleConfirmDelete = () => {
		deleteUser(id);
		navigation.navigate('Contacts');
	}

	// Go to chat
	const handleMessage = () => {
		navigation.navigate('Chat', { id: id });
	}

	// Header buttons
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <HeaderButton title={`${isEdit ? 'Done' : 'Edit' }`} onPress={!isEdit ? handleEditNavigate : isHaveChanges ? handleFinishNavigate : undefined } color={!isEdit ? Colors.general.white : isHaveChanges ? Colors.general.white : Colors.secondary.gray} />,
		});
		if (!isEdit) navigation.setOptions({ headerLeft: () => null })
	}, [navigation, isEdit, isHaveChanges]);

	
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaProvider>
				<ScrollView style={{ flex: 1 }}>
					{nameRef.current !== undefined && surnameRef.current !== undefined && phoneRef.current !== undefined && 
						<Styled.Contact>
							<Animated.View style={{ transform: [{ translateY: photoPosition }] }}>
								<Styled.ContactPhoto>
									<Styled.ContactPhotoText>{shortNameRef.current}</Styled.ContactPhotoText>
								</Styled.ContactPhoto>
							</Animated.View>
							<Animated.View style={{ transform: [{ scale: infoScale }] }}>
								<Styled.Info>
									<Styled.Input ref={inputRef} isEdit={isEdit} editable={isEdit ? true : false} value={name} onChangeText={setName} />
									<Styled.Input isEdit={isEdit} editable={isEdit ? true : false} value={surname} onChangeText={setSurname} />
								</Styled.Info>
							</Animated.View>
							<Animated.View style={{ transform: [{ scale: phoneScale }, { translateY: phonePosition }] }}>  
								<Styled.Phone>
									<Styled.Input isEdit={isEdit} keyboardType='phone-pad' editable={isEdit ? true : false} value={phone} onChangeText={handlePhone} />
								</Styled.Phone>
							</Animated.View>
							<Animated.View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', transform: [{ translateY: buttonPosition }] }}>
								<IconButton onPress={handleMessage} style={{ alignSelf: 'center', marginRight: 8 }} text='message' Icon={<Chat color={Colors.general.purple} />} />
								<IconButton onPress={handleDelete(true)} style={{ alignSelf: 'center' }} text='delete' Icon={<Delete color={Colors.general.error} />} />
							</Animated.View>
						</Styled.Contact>
					}
				</ScrollView>
				<ModalTwoOptions isShow={isDelete} firstText='Delete Contact' secondText='Cancel' handleFirst={handleConfirmDelete} handleSecond={handleDelete(false)} />
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	);
}
