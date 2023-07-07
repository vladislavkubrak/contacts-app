import React from 'react';
import Svg, { Path, Circle, Ellipse } from 'react-native-svg';
import { View } from 'react-native';
import { IChat } from './types';
import { Colors } from '../../../constants/Colors';


export const Chat: React.FC<IChat> = ({ style, color = Colors.general.black, width = 24, height = 24 }) => (
	<View style={style}>
		<Svg fill={color} height={height} width={width} viewBox="0 0 60 60">
			<Path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"/>
		</Svg>
    </View>
);


