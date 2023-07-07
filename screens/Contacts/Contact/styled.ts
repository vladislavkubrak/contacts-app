import styled from "styled-components/native";
import { Colors } from "../../../constants/Colors";

export const Contact = styled.View`
	display: flex;
	flex-direction: column;
	margin-top: 12px;
`;

export const ContactPhoto = styled.View`
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: center;
	width: 110px;
	height: 110px;
	background-color: ${Colors.secondary.gray};
	border-radius: 100px;
	margin-bottom: 12px;
`;

export const ContactPhotoText = styled.Text`
	font-size: 40px;
	color: ${Colors.general.black};
`;

export const Info = styled.View`
	align-self: center;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	
`;

export const Input = styled.TextInput<{ ref?: any, isEdit: boolean }>`
	display: flex;
	margin-right: 5px;
	font-size: 40px;
	background-color: ${props => props.isEdit ? Colors.general.white : 'transparent'};
	border-radius: 10px;
	padding: ${props => props.isEdit ? '8px' : '0px'};
	color: ${Colors.general.black};
`;

export const Phone = styled.View`
	align-self: center;
	margin-bottom: 20px;
`;
