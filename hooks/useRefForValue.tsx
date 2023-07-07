import { useEffect, useRef } from 'react';

export const useRefForValue = (value: string) => {
	const ref = useRef('');

	useEffect(() => {
		ref.current = value;
	}, [value])

	return ref;
}