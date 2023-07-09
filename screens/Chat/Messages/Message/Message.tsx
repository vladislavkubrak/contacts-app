import React, { FC, memo, useContext } from 'react';
import { IMessage } from './types';

import * as Styled from './styled';
import { Context } from '../../../../context';

export const Message: FC<IMessage> = memo(({ text, isMe }) => {
	const { colorScheme } = useContext(Context);

	return (
		<Styled.Message color={colorScheme} isMe={isMe}>
			<Styled.MessageText>
				{text}
			</Styled.MessageText>
		</Styled.Message>
	);
});
