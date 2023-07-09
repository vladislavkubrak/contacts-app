import React, { FC, useContext, useEffect, useRef, useState } from "react"
import { useRoute } from "@react-navigation/native";
import { IChat } from "./types";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { IRootStack } from "../../types";
import { Input } from "../../components/Input/Input";
import { Colors } from "../../constants/Colors";
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { getUserById, sendMessage } from "../../databaseMethods";
import { useRefForValue } from "../../hooks/useRefForValue";
import { Messages } from "./Messages/Messages";
import { SendButton } from "../../components/SendButton/SendButton";
import { useKeyboardVisible } from "../../hooks/useKeyboardVisible";
import { useLayoutEffect } from "react";
import * as Styled from './styled';
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../../context";
import { content } from "../../content";


export const Chat: FC<IChat> = ({}) => {
	const { colorScheme, language } = useContext(Context);
	const { inputPlaceholder } = content[language].screens.Chat;
	
	// Navigation
	const navigation = useNavigation<NavigationProp<IRootStack, 'Chat'>>();

	// Route
	const route = useRoute();
	const { id } = route.params as { id: number };

	// State
	const [text, setText] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	// Check if message was sent
	const [sendMsg, setSendMsg] = useState(false);

	// Refs
	const nameRef = useRefForValue(name);
	const surnameRef = useRefForValue(surname);
	const phoneRef = useRefForValue(phone);
	const flatListRef = useRef<FlatList>(null);
	const {isKeyboardVisible, setKeyboardVisible} = useKeyboardVisible();

	// Get user data
	useEffect(() => {
		const getData = async () => {
			await getUserById(id).then((user) => {
				setName(user.name);
				setSurname(user.surname);
				setPhone(user.phone);
			});
		}
		getData();
	}, [id, sendMsg])

	const handleFocus = () => {
		if (flatListRef.current) {
			flatListRef.current.scrollToEnd({ animated: true });
		}
	}

	const handleKeyboardDidShow = () => {
		setKeyboardVisible(true);
		setTimeout(handleFocus, 100);
	};

	const handleKeyboardDidHide = () => {
		setKeyboardVisible(false);
	};

  useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

		return () => {
		keyboardDidShowListener.remove();
		keyboardDidHideListener.remove();
		};
  }, []);

	useLayoutEffect(() => {
		setTimeout(handleFocus, 1000);
	}, [isKeyboardVisible]);
	
	// Set button in header
	useEffect(() => {
		navigation.setOptions({
			headerStyle: { backgroundColor: colorScheme },
			headerBackTitle: surnameRef.current,
			headerTitle: () => (
				<Styled.HeaderTitle>
					<Styled.UserIcon>
						<Styled.UserText>{(nameRef.current[0] + surnameRef.current[0] || '')}</Styled.UserText>
					</Styled.UserIcon>
					<Styled.Phone>{phoneRef.current || ''}</Styled.Phone>
				</Styled.HeaderTitle>
			),
		})
	}, [id, name, surname, phone]);

	const handlePushMessage = () => {
		sendMessage(1, id, text);
		setText('');
		Keyboard.dismiss();
		setSendMsg(prev => !prev);
	}


	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<>
				<Styled.Chat isShowKeyboard={isKeyboardVisible}>
					<Messages refForScroll={flatListRef} flagMsg={sendMsg}  />
				</Styled.Chat>
				<Input onFocus={handleFocus} style={{ position: 'absolute', right: 30, bottom: isKeyboardVisible ? 360 : 30, borderRadius: 100, width: 250, height: 40, backgroundColor: Colors.general.gray, borderColor: Colors.secondary.gray, paddingRight: 45 }} value={text} onChangeText={setText} placeholder={inputPlaceholder} />
				{text.length > 0 && <SendButton onPress={handlePushMessage} style={{ position: 'absolute', right: 36, bottom: isKeyboardVisible ? 365 : 35 }} />}
			</>
		</TouchableWithoutFeedback>
	);
}
