import React, { FC } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { IModalTwoOptions } from './types';

export const ModalTwoOptions: FC<IModalTwoOptions> = ({ isShow, firstText, secondText, handleFirst, handleSecond }) => {
	return (
		<Modal visible={isShow} transparent={true}>
			<View style={{ position: 'relative', width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
				<View style={{ position: 'absolute', bottom: '5%', width: '95%', display: 'flex', justifyContent: 'space-between', marginTop: 0 }}>
					<TouchableWithoutFeedback onPress={handleFirst}>
						<View style={{ marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 72, backgroundColor: Colors.other.confirButton, borderRadius: 17 }}>
						<Text style={{ color: Colors.general.error, fontSize: 22 }}>{firstText}</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={handleSecond}>
						<View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 72, backgroundColor: Colors.other.cancelButton, borderRadius: 17 }}>
							<Text style={{ color: Colors.general.purple, fontSize: 22 }}>{secondText}</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</Modal>
	);
}