import styled from "styled-components/native";
import { User } from "../../../components/icons/User/User";
import { TextInput } from "react-native";
import { Colors } from "../../../constants/Colors";

export const NewContact = styled.View`
	display: flex;
	flex-direction: column;
`;

export const UserIcon = styled(User)`
	margin: 38px auto 22px;
`;
