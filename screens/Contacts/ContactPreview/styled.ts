import styled from 'styled-components/native';
import { Colors } from '../../../constants/Colors';

export const ContactPreview = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 8px;
	margin-bottom: 6px;
	width: 100%;
`;

export const ContactPreviewPhoto = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	margin-right: 8px;
	border-radius: 50px;
	background-color: ${Colors.secondary.gray};
`;

export const ContactPreviewPhotoText = styled.Text`

`;

export const ContactPreviewInfo = styled.View`

`;

export const ContactPreviewName = styled.Text`

`;

export const ContactPreviewSurname = styled.Text`

`;
