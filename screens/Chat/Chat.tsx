import React, { FC, useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native";
import { IChat } from "./types";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { IRootStack } from "../../types";
import * as Styled from './styled';
import { Input } from "../../components/Input/Input";
import { useInput } from "../../hooks/useInput";
import { Colors } from "../../constants/Colors";
import { TouchableWithoutFeedback, Keyboard, Platform, FlatList, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SendButton } from "../../components/SendButton/SendButton";
import { KeyboardAvoidingView } from "react-native";
import { getChatMessages, getUserById, sendMessage } from "../../databaseMethods";
export const Chat: FC<IChat> = ({}) => {
	// Route
	const route = useRoute();
	const { id } = route.params as { id: number };

	// Navigation
	const navigation = useNavigation<NavigationProp<IRootStack, 'Chat'>>();

	const [text, setText] = useInput('');
	const [inputBottom, setInputBottom] = useState(0);
	const [sendBottom, setSendBottom] = useState(-735);
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	const nameRef = useRef('');
	const surnameRef = useRef('');
	const phoneRef = useRef('');

	const [sendMsg, setSendMsg] = useState(false);



	useEffect(() => {nameRef.current = name}, [name]);
	useEffect(() => {surnameRef.current = surname}, [surname]);
	useEffect(() => {phoneRef.current = phone}, [phone]);


	useEffect(() => {
		const getData = async () => {
			await getUserById(id).then((user) => {
				setName(user.name);
				setSurname(user.surname);
				setPhone(user.phone);
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
						<Styled.UserText>{nameRef.current[0] + surnameRef.current[0]}</Styled.UserText>
					</Styled.UserIcon>
					<Styled.Phone>{phoneRef.current}</Styled.Phone>
				</Styled.HeaderTitle>
			),
		})
	}, [id, name, surname, phone]);


	// useEffect(() => {
	// 	const keyboardDidShowListener = Keyboard.addListener(
	// 	  	Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
	// 			(event) => {
	// 				setIsShowKeyboard(true);
	// 				setInputBottom(-390);
	// 				setSendBottom(-385);
	// 			}
	// 	);
	
	// 	const keyboardDidHideListener = Keyboard.addListener(
	// 		Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
	// 	  		() => {
	// 				setIsShowKeyboard(false);
	// 				setInputBottom(-730);
	// 				setSendBottom(-725);
	// 			}
	// 	);
	
	// 	return () => {
	// 		keyboardDidShowListener.remove();
	// 		keyboardDidHideListener.remove();
	// 	};
	// }, []);

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
					{/* <KeyboardAvoidingView style={{ flex: 1, position: 'relative' }}   behavior={Platform.OS === 'ios' ? 'position' : undefined}> */}
					
						<Styled.Chat isShowKeyboard={isShowKeyboard}>
							{/* <Messages handleMsg={setSendMsg} flagMsg={sendMsg}  /> */}
							<Input style={{ position: 'absolute', right: 30, bottom: inputBottom, borderRadius: 100, width: 250, height: 40, backgroundColor: Colors.general.gray, borderColor: Colors.secondary.gray, paddingRight: 45 }} value={text} onChangeText={setText} placeholder="Text Message" />
							{/* {text.length > 0 && <SendButton onPress={handlePushMessage} style={{ position: 'absolute', right: 40, bottom: sendBottom }} />} */}
						</Styled.Chat>
					
					{/* </KeyboardAvoidingView>	 */}
				</SafeAreaView>
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	);
}

export interface IMessages {
	handleMsg: (flag: boolean) => void;
	flagMsg: boolean;
}

export interface IMessage {
	text: string;
	isMe: boolean;
}

const data = [
	{ userId: 1, friendId: 2, text: 'Hello', isMe: true },
	{ userId: 1, friendId: 2, text: 'Hi', isMe: false },
	{ userId: 1, friendId: 2, text: 'How Are you?', isMe: true },
	{ userId: 1, friendId: 2, text: 'fine ty, and u?', isMe: false },
	{ userId: 1, friendId: 2, text: 'How Are you How Are you How Are you How Are you How Are you How Are you How Are you How Are you How Are you How Are you?', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million good thanks a million good thanks a million good thanks a million good thanks a million', isMe: false },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
	{ userId: 1, friendId: 2, text: 'good thanks a million', isMe: true },
]


export const Message: FC<IMessage> = ({ text, isMe}) => {
	return (
		<Styled.Message isMe={isMe}>
			<Styled.MessageText>
				{text}
			</Styled.MessageText>
		</Styled.Message>
	);
}

import { useRef } from "react";


function interleaveArrays<T>(arr1: T[], arr2: T[]): T[] {
	const result: T[] = [];
	const maxLength = Math.max(arr1.length, arr2.length);
  
	for (let i = 0; i < maxLength; i++) {
	  if (i < arr1.length) {
		result.push(arr1[i]);
	  }
	  if (i < arr2.length) {
		result.push(arr2[i]);
	  }
	}
  
	return result;
}

export const Messages: FC<IMessages> = ({ handleMsg, flagMsg }) => {
	const flatListRef = useRef<FlatList>(null);
	const [data, setData] = useState<any>([]);
	const [incomeData, setIncomeData] = useState<any>([]);

	const route = useRoute();
	const { id } = route.params as { id: number };

	useEffect(() => {
		const handleGetMessages = async () => {
			await getChatMessages(id).then((messages: any) => {
				const incomeMessages = messages.map((msg: any) => ({ ...msg, isMe: false }));
				const myMessages = messages.map((msg: any) => ({ ...msg, isMe: true }));
				
				setData(interleaveArrays<any>(myMessages, incomeMessages));
			});
		}
		handleGetMessages();
	}, [id, flagMsg]);


	// useEffect(() => {
	// 	if (flatListRef.current) {
	// 		flatListRef.current.scrollToEnd({ animated: true });
	// 	}
	// }, [data]);

	return (

		<Styled.Messages>
			{data && data.length > 0 
			? 
				<FlatList
					ref={flatListRef}
					data={data}
					renderItem={({ item }) => <Message text={item.text} isMe={item.isMe} />}
					keyExtractor={(_, index) => index.toString()}
					keyboardShouldPersistTaps="handled"
					contentInsetAdjustmentBehavior="never"
					showsVerticalScrollIndicator={false}
					// onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
				/>
			:
				<Text>{data.length}</Text>
			}
		</Styled.Messages>
	);
}