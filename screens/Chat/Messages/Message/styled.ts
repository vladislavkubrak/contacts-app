import styled from 'styled-components/native';
import { Colors } from '../../../../constants/Colors';

export const Message = styled.View<{isMe: boolean, color: string}>`
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
	background-color: ${props => props.isMe ? props.color : Colors.other.chatBackground};
	margin-left: ${props => props.isMe ? 'auto' : '0'};
	margin-right: ${props => props.isMe ? '0' : 'auto'};
	margin-bottom: 10px;
	`;

export const MessageText = styled.Text`
	font-size: 14px;
	color: ${Colors.general.white};
`;