import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const useAnimate = (isEdit: boolean) => {
	const photoPosition = useRef(new Animated.Value(0)).current;
	const infoScale = useRef(new Animated.Value(1)).current;
	const phoneScale = useRef(new Animated.Value(1)).current;
	const phonePosition = useRef(new Animated.Value(0)).current;
	const buttonPosition = useRef(new Animated.Value(0)).current;
	const bgOpacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(bgOpacity, {
			toValue: isEdit ? 1 : 0, // Change opacity to 1 when isEdit is true, and to 0 when it's false
			duration: 500, // Duration of the animation
			useNativeDriver: true, // Use native driver for better performance
		}).start();
	}, [isEdit]);

	const animate = (editMode: boolean) => {
		const toValue = editMode ? 1.2 : 1;
		const positionToValue = editMode ? 50 : 0;
		Animated.parallel([
			Animated.timing(photoPosition, {
				toValue: editMode ? -300 : 0,
				duration: 1000,
				useNativeDriver: false,
			}),
			Animated.timing(infoScale, {
				toValue: toValue,
				duration: 500,
				useNativeDriver: false,
			}),
			Animated.timing(phoneScale, {
				toValue: toValue,
				duration: 500,
				useNativeDriver: false,
			}),
			Animated.timing(phonePosition, {  // Исправлено
				toValue: positionToValue,
				duration: 500,
				useNativeDriver: false,
			}),
			Animated.timing(buttonPosition, {
				toValue: editMode ? 800 : 0,
				duration: 900,
				useNativeDriver: false,
			}),
		]).start();
	};	

	return { phonePosition, phoneScale, photoPosition, infoScale, buttonPosition, bgOpacity, animate };
}