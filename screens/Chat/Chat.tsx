import React, { FC, useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native";
import { IChat } from "./types";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { IRootStack } from "../../types";
import { Input } from "../../components/Input/Input";
import { Colors } from "../../constants/Colors";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getUserById, sendMessage } from "../../databaseMethods";
import { useRefForValue } from "../../hooks/useRefForValue";
import { Messages } from "./Messages/Messages";
import { SendButton } from "../../components/SendButton/SendButton";

import * as Styled from './styled';

export const Chat: FC<IChat> = ({}) => {
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
	const [shortName, setShortname] = useState('');
	// Check if message was sent
	const [sendMsg, setSendMsg] = useState(false);

	// Refs
	const nameRef = useRefForValue('');
	const surnameRef = useRefForValue('');
	const phoneRef = useRefForValue('');
	const shortNameRef = useRefForValue('');

	// Get user data
	useEffect(() => {
		const getData = async () => {
			await getUserById(id).then((user) => {
				setName(user.name);
				setSurname(user.surname);
				setPhone(user.phone);
				setShortname(user.shortName);
			});
		}
		getData();
	}, [id])
	


	useEffect(() => {
		navigation.setOptions({
			headerBackTitle: surnameRef.current,
			headerTitle: () => (
				<Styled.HeaderTitle>
					<Styled.UserIcon>
						<Styled.UserText>{shortNameRef.current}</Styled.UserText>
					</Styled.UserIcon>
					<Styled.Phone>{phoneRef.current}</Styled.Phone>
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
			<SafeAreaProvider>
				<SafeAreaView style={{ position: 'relative', flex: 1 }}>
						<Styled.Chat>
							<Messages flagMsg={sendMsg}  />
							<Input style={{ position: 'absolute', right: 30, bottom: 0, borderRadius: 100, width: 250, height: 40, backgroundColor: Colors.general.gray, borderColor: Colors.secondary.gray, paddingRight: 45 }} value={text} onChangeText={setText} placeholder="Text Message" />
							{text.length > 0 && <SendButton onPress={handlePushMessage} style={{ position: 'absolute', right: 40, bottom: 0 }} />}
						</Styled.Chat>
				</SafeAreaView>
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	);
}
