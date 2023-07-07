import React, { FC, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ILoading } from './types';
import { Text } from './scheme';
import { initDatabase } from '../../scheme';

import * as Styled from './styled';


export const Loading: FC<ILoading> = ({ navigation }) => {
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
				<Styled.Loading>
					<Styled.Text>{Text}</Styled.Text>
				</Styled.Loading>
			</Styled.SafeAreaView>
		</SafeAreaProvider>
	);
}


const fetchData = async (navigation: any) => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		navigation.reset({
		  index: 0,
		  routes: [{ name: "Contacts" }],
		});
		resolve(null);
	  }, 4000);
	}); 
  };

  	// useEffect(() => {
	// 	fetchData(navigation);
	// }, []);