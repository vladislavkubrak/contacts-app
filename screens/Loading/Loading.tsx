// System
import React, { FC, useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Others
import { ILoading } from './types';
import { Text } from './scheme';
import { initDatabase } from '../../scheme';
import { Context } from '../../context';

// Style
import * as Styled from './styled';


export const Loading: FC<ILoading> = ({ navigation }) => {
	const { colorScheme } = useContext(Context);

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
				<Styled.Loading color={colorScheme}>
					<Styled.Text>{Text}</Styled.Text>
				</Styled.Loading>
			</Styled.SafeAreaView>
		</SafeAreaProvider>
	);
}
