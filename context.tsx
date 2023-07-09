import React, { FC, ReactNode, createContext, useState } from 'react';
import { Colors } from './constants/Colors';

interface IContext {
	colorScheme: string;
	setColorScheme: (color: string) => void;
	language: string;
	setLanguage: (language: string) => void;
}

const defaultContext: IContext = {
	colorScheme: Colors.general.purple,
	setColorScheme: () => {},
	language: 'en',
	setLanguage: () => {}
}

export const Context = createContext<IContext>(defaultContext);

export const ContextProvider: FC<{children: ReactNode}> = ({ children }) => {
	const [colorScheme, setColorScheme] = useState<string>(defaultContext.colorScheme);
	const [language, setLanguage] = useState<string>(defaultContext.language);

	const contextValue: IContext = {
		colorScheme,
		setColorScheme,
		language,
		setLanguage
	}

	return (
		<Context.Provider value={contextValue}>
			{children}
		</Context.Provider>
	);
}

