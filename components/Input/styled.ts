import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Colors } from "../../constants/Colors";

export const Input = styled(TextInput)`
	width: 100%;
	border: 1px solid ${Colors.general.gray};
	height: 43px;
	padding-left: 16px;
	padding-right: 16px;
	color: ${Colors.general.black};
	background-color: ${Colors.general.white};
	/* box-sizing: border-box; */
	/* font-size: inherit; */
	/* line-height: normal; */
	font-style: normal;
	font-weight: 400;
`;
