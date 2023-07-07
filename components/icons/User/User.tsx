import React from 'react';
import Svg, { Path, Circle, Ellipse } from 'react-native-svg';
import { View } from 'react-native';
import { IUser } from './types';


export const User: React.FC<IUser> = ({ style, width = 173, height = 173 }) => (
	<View style={style}>
		<Svg width={width} height={height} viewBox="0 0 173 173" fill="none">
			<Circle cx="86.5" cy="86.5" r="86.5" fill="#868994"/>
			<Ellipse cx="86.5" cy="67" rx="29.5" ry="32" fill="white"/>
			<Path d="M135 126C135 135.389 113.286 151 86.5 151C59.7142 151 38 135.389 38 126C38 116.611 59.7142 109 86.5 109C113.286 109 135 116.611 135 126Z" fill="white"/>
		</Svg>
    </View>
);
