import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";
import { FlatList, View } from "react-native";

export const Chat = styled.View<{isShowKeyboard: boolean}>`
	flex: 1;
	/* height: 100%; */
	
	width: 100%;
	padding-bottom: ${props => props.isShowKeyboard ? '290px' : '60px'};
	
	position: relative;
`;

export const HeaderTitle = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Phone = styled.Text`
	font-size: 11px;
	color: ${Colors.general.white};
`;

export const UserIcon = styled.View`
	border-radius: 100px;
	width: 22px;
	height: 22px;
	background-color: ${Colors.secondary.gray};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const UserText = styled.Text`
	font-size: 10px;
	align-self: center;
`;


export const Messages = styled(View)`
	flex: 1;
	/* height: 350px; */
	/* background-color: red; */
	padding-left: 10px;
	padding-right: 10px;
	/* padding-bottom: 60px; */

	display: flex;
	/* overflow: hidden; */
`;

export const Message = styled.View<{isMe: boolean}>`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: auto;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 20px;
	padding-right: 20px;
	min-height: 40px;
	max-width: 80%;
	border-radius: 100px;
	background-color: ${props => props.isMe ? Colors.general.purple : Colors.other.chatBackground};
	margin-left: ${props => props.isMe ? 'auto' : '0'};
	margin-right: ${props => props.isMe ? '0' : 'auto'};
	margin-bottom: 10px;
	`;

export const MessageText = styled.Text`
	font-size: 14px;
	color: ${Colors.general.white};
`;