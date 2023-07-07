import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { IPlus } from './types';
import { SIZE } from './constants';


export const Plus: React.FC<IPlus> = ({ size = SIZE, color = Colors.general.white, style }) => (
	<View style={style}>
        <Svg
            style={{ transform: [{ rotate: '45deg' }] }}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M18 6L6 18" />
            <Path d="M6 6l12 12" />
        </Svg>
    </View>
);
