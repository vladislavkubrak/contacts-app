import { useState, useEffect } from 'react';
import { AppState, Alert } from 'react-native';

export const useLastActiveTime = () => {
	const [lastActiveTime, setLastActiveTime] = useState<Date | null>(null);
	const [isInBackground, setIsInBackground] = useState<boolean>(false);
	const [minutes, setMinutes] = useState<number>(0);
	const [isShow, setIsShow] = useState<boolean>(false);

	useEffect(() => {
		const handleAppStateChange = (state: string) => {
			setIsInBackground(state !== 'active');
			if (state === 'active') {
			setLastActiveTime(new Date());
			}
		};

		AppState.addEventListener('change', handleAppStateChange);
	}, []);
  
	useEffect(() => {
		if (!isInBackground && lastActiveTime) {
			const currentTime = new Date();
			setMinutes(Math.floor((currentTime.getTime() - lastActiveTime.getTime()) / (1000 * 60)));
		}
	}, [lastActiveTime, isInBackground]);

	
	useEffect(() => {
		if (!isInBackground) {
			setIsShow(true);
		}
	}, [isInBackground]);
	
	useEffect(() => {
		if (isShow && +minutes > 0) {
			Alert.alert(`Minutes: ${minutes}`);
			setIsShow(false);
		}
	}, [isShow, minutes]);
};
  