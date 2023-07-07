import React from 'react';
import Svg, { Path, Circle, Ellipse, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { View } from 'react-native';
import { IDelete } from './types';
import { Colors } from '../../../constants/Colors';


export const Delete: React.FC<IDelete> = ({ style, color = Colors.general.black, width = 24, height = 24 }) => (
	<View style={style}>
		<Svg fill="none" height={height} width={width} viewBox="0 0 30 30">
			<G clip-path="url(#clip0_73_800)">
				<Circle cx="15" cy="15" r="15" fill={color}/>
				<Rect x="6" y="13" width="18" height="4" fill="white"/>
			</G>
			<Defs>
				<ClipPath id="clip0_73_800">
					<Rect width="30" height="30" fill="white"/>
				</ClipPath>
			</Defs>
		</Svg>
    </View>
);


