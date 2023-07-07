import React, { FC } from "react";
import { IContactPreview } from "./types";
import * as Styled from "./styled";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IRootStack } from "../../../types";

export const ContactPreview: FC<IContactPreview> = ({ id, name, surname }) => {
	const navigation = useNavigation<NavigationProp<IRootStack, 'Contact'>>();
	const handlePress = () => navigation.navigate('Contact', { id: id, isEdit: false });

	return (
		<Styled.ContactPreview onPress={handlePress}>
			<Styled.ContactPreviewPhoto>
				<Styled.ContactPreviewPhotoText>{name[0] + surname[0]}</Styled.ContactPreviewPhotoText>
			</Styled.ContactPreviewPhoto>
			<Styled.ContactPreviewInfo>
				<Styled.ContactPreviewName>{name}</Styled.ContactPreviewName>
				<Styled.ContactPreviewSurname>{surname}</Styled.ContactPreviewSurname>
			</Styled.ContactPreviewInfo>
		</Styled.ContactPreview>
	);
}
