import React, { FC, useContext, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ILoading } from './types';
import { Text } from './scheme';
import { initDatabase } from '../../scheme';

import * as Styled from './styled';
import { Context } from '../../context';
import { Colors } from '../../constants/Colors';


export const Loading: FC<ILoading> = ({ navigation }) => {
	const context = useContext(Context);

	useEffect(() => {
		const initializeDatabase = async () => {
		  await initDatabase();
		  navigation.reset({
			index: 0,
			routes: [{ name: "Contacts" }],
		  });
		};
	  
		initializeDatabase();
	  }, []);


	return (
		<SafeAreaProvider>
			<Styled.SafeAreaView>
				<Styled.Loading color={context.colorScheme}>
					<Styled.Text>{Text}</Styled.Text>
				</Styled.Loading>
			</Styled.SafeAreaView>
		</SafeAreaProvider>
	);
}
