import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export const Loading = styled.View`
	display: flex;
	background-color: ${Colors.general.purple};
	width: 100%;
	height: 100%;
	padding-bottom: 80px;
`;

export const Text = styled.Text`
	font-size: 30px;
	color: ${Colors.general.white};
	text-transform: uppercase;
	margin: auto;
`;

export const SafeAreaView = styled.SafeAreaView`
	background-color: ${Colors.general.purple};
`;