import React, { useState } from "react";

export const useInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);
	return [value, setValue] as const;
};