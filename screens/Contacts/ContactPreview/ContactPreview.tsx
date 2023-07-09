// System
import React, { FC } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

// Others
import { IContactPreview } from "./types";
import { IRootStack } from "../../../types";

// Style
import * as Styled from "./styled";


export const ContactPreview: FC<IContactPreview> = ({ id, name, surname, shortName }) => {
	const navigation = useNavigation<NavigationProp<IRootStack, 'Contact'>>();
	const handlePress = () => navigation.navigate('Contact', { id: id, isEdit: false });

	return (
		<Styled.ContactPreview onPress={handlePress}>
			<Styled.ContactPreviewPhoto>
				<Styled.ContactPreviewPhotoText>{shortName}</Styled.ContactPreviewPhotoText>
			</Styled.ContactPreviewPhoto>
			<Styled.ContactPreviewInfo>
				<Styled.ContactPreviewName>{name}</Styled.ContactPreviewName>
				<Styled.ContactPreviewSurname>{surname}</Styled.ContactPreviewSurname>
			</Styled.ContactPreviewInfo>
		</Styled.ContactPreview>
	);
}
