// System
import React, { FC, useEffect, useState, useRef, useContext } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, Animated, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute, useNavigation, NavigationProp } from '@react-navigation/native';

// Components
import { Chat } from '../../../components/icons/Chat/Chat';
import { HeaderButton } from '../../../components/HeaderButton/HeaderButton';
import { IconButton } from '../../../components/IconButton/IconButton';
import { Delete } from '../../../components/icons/Delete/Delete';
import { ModalTwoOptions } from '../../../components/ModalTwoOptions/ModalTwoOptions';

// Others
import { IRootStack } from '../../../types';
import { Colors } from '../../../constants/Colors';
import { useAnimate } from './useAnimate';
import { deleteUser, editUser, getUserById } from '../../../databaseMethods';
import { useRefForValue } from '../../../hooks/useRefForValue';
import { Context } from '../../../context';
import { content } from '../../../content';

// Style
import * as Styled from './styled';


export const Contact: FC<{}> = ({}) => {
	// Initialize context
	const { language, colorScheme } = useContext(Context);
	const { title, cancelTitle, editTitle, doneTitle, messageTitle, deleteTitle, buttonDelete } = content[language].screens.Contact;

	// Navigation
	const navigation = useNavigation<NavigationProp<IRootStack, 'Contact'>>();

	// Route
	const route = useRoute();
	const { id, isEdit } = route.params as { id: number, isEdit: boolean };

	// Inputs state
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');

	// Inputs refs
	const nameRef = useRefForValue(name);
	const surnameRef = useRefForValue(surname);
	const phoneRef = useRefForValue(phone);


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
		// if (inputRef && inputRef.current)
		// 	(inputRef.current as any).focus(); // DOESNT WORK
		navigation.setOptions({ headerLeft: () => <HeaderButton title={cancelTitle} onPress={handleCancelNavigate} color={Colors.general.white} />});
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
			headerStyle: {
				backgroundColor: colorScheme,
			},
			headerTitle: title,
			headerRight: () => <HeaderButton title={`${isEdit ? doneTitle : editTitle }`} onPress={!isEdit ? handleEditNavigate : isHaveChanges ? handleFinishNavigate : undefined } color={!isEdit ? Colors.general.white : isHaveChanges ? Colors.general.white : Colors.secondary.gray} />,
		});
		if (!isEdit) navigation.setOptions({ headerLeft: () => null })
	}, [navigation, isEdit, isHaveChanges, colorScheme]);

	
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaProvider>
				<ScrollView style={{ flex: 1 }}>
					{nameRef.current !== undefined && surnameRef.current !== undefined && phoneRef.current !== undefined && 
						<Styled.Contact>
							<Animated.View style={{ transform: [{ translateY: photoPosition }] }}>
								<Styled.ContactPhoto>
									<Styled.ContactPhotoText>{(name[0] + surname[0]) || ''}</Styled.ContactPhotoText>
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
								<IconButton onPress={handleMessage} style={{ alignSelf: 'center', marginRight: 8 }} text={messageTitle} Icon={<Chat color={colorScheme} />} />
								<IconButton onPress={handleDelete(true)} style={{ alignSelf: 'center' }} text={deleteTitle} Icon={<Delete color={Colors.general.error} />} />
							</Animated.View>
						</Styled.Contact>
					}
				</ScrollView>
				<ModalTwoOptions isShow={isDelete} firstText={buttonDelete.confirmText} secondText={buttonDelete.cancelText} handleFirst={handleConfirmDelete} handleSecond={handleDelete(false)} />
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	);
}
