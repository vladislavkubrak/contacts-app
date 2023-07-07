import React, { FC } from 'react';
import { IMessage } from './types';

import * as Styled from './styled';

export const Message: FC<IMessage> = ({ text, isMe }) => {
	return (
		<Styled.Message isMe={isMe}>
			<Styled.MessageText>
				{text}
			</Styled.MessageText>
		</Styled.Message>
	);
}
