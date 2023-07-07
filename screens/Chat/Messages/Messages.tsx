import React, { FC, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { IMessages } from './types';
import { interleaveArrays } from './utils';
import { getChatMessages } from '../../../databaseMethods';
import { Message } from './Message/Message';

import * as Styled from './styled';

export const Messages: FC<IMessages> = ({ flagMsg }) => {
    // State and Refs
	const flatListRef = useRef<FlatList>(null);
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
		<Styled.Messages>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item }) => <Message text={item.text} isMe={item.isMe} />}
                keyExtractor={(_, index) => index.toString()}
                keyboardShouldPersistTaps="handled"
                contentInsetAdjustmentBehavior="never"
                showsVerticalScrollIndicator={false}
                // onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            />
		</Styled.Messages>
	);
}