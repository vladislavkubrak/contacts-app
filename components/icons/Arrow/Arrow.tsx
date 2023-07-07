import React from 'react';
import Svg, { Path, Circle, Ellipse } from 'react-native-svg';
import { View } from 'react-native';
import { IArrow } from './types';
import { Colors } from '../../../constants/Colors';


export const Arrow: React.FC<IArrow> = ({ style, color = Colors.general.white, width = 11, height = 11 }) => (
	<View style={style}>
		<Svg width={width} height={height} viewBox="0 0 11 11" fill="none">
			<Path d="M6.19776 10.5L6.19776 2.27424L7.64646 3.70609C7.84169 3.90136 8.15829 3.54883 8.35356 3.35357C8.45116 3.25593 8.49999 3.12797 8.49999 3C8.49999 2.87203 8.45116 2.74407 8.35353 2.64647L5.85353 0.146468C5.65829 -0.0487986 5.34169 -0.0487986 5.14643 0.146468L2.64642 2.64647C2.45119 2.8417 2.45119 3.1583 2.64642 3.35357C2.84166 3.54883 3.15826 3.90136 3.35352 3.70609L4.66686 2.27424L4.66686 10.5C4.66686 10.7761 5.22386 11 5.49999 11C5.77613 11 6.19776 10.7761 6.19776 10.5Z" fill={color}/>
		</Svg>
    </View>
);


