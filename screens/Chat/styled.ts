import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";
import { FlatList, View } from "react-native";

export const Chat = styled.View<{isShowKeyboard?: boolean}>`
	flex: 1;
	width: 100%;
	padding-bottom: 0;
	
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
