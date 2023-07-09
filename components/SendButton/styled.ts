import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";

export const SendButton = styled.TouchableOpacity<{color: string}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	background-color: ${props => props.color};
	border-radius: 100px;
`;

export const Icon = styled.View`
	width: 11px;
	height: 11px;
`;

