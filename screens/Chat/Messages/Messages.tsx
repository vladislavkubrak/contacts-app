import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { IMessages } from './types';
import { interleaveArrays } from './utils';
import { getChatMessages } from '../../../databaseMethods';
import { Message } from './Message/Message';

import * as Styled from './styled';

export const Messages: FC<IMessages> = memo(({ flagMsg, refForScroll }) => {
    // State and Refs
	// const flatListRef = useRef<FlatList>(null);
	const [data, setData] = useState<any>([]);

    // Route
	const route = useRoute();
	const { id } = route.params as { id: number };

	useEffect(() => {
		const handleGetMessages = async () => {
			await getChatMessages(id).then((messages: any) => {
                // Imitation chat
				const incomeMessages = messages.map((msg: any) => ({ ...msg, isMe: false }));
				const myMessages = messages.map((msg: any) => ({ ...msg, isMe: true }));
				
				setData(interleaveArrays<any>(myMessages, incomeMessages));
			});
		}
		handleGetMessages();
	}, [id, flagMsg]);


	return (
		<Styled.Messages
			ref={refForScroll}
			data={data}
			renderItem={({item}: any) => <Message text={item.text} isMe={item.isMe} />}
			keyExtractor={(_: any, index: any) => index.toString()}
			keyboardShouldPersistTaps="handled"
			contentInsetAdjustmentBehavior="never"
			showsVerticalScrollIndicator={false}
			// contentContainerStyle={{
			// 	flexGrow: 1,
			// 	}}
			// onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
		/>
	);
});