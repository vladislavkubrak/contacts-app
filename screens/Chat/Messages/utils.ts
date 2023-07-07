export function interleaveArrays<T>(arr1: T[], arr2: T[]): T[] {
	const result: T[] = [];
	const maxLength = Math.max(arr1.length, arr2.length);
  
	for (let i = 0; i < maxLength; i++) {
	  if (i < arr1.length) {
		result.push(arr1[i]);
	  }
	  if (i < arr2.length) {
		result.push(arr2[i]);
	  }
	}
  
	return result;
}
