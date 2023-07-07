import styled from 'styled-components/native';

export const HeaderButton = styled.View<{ width: string, height: string }>`
	width: ${props => props.width};
	height: ${props => props.height};
`;

export const HeaderButtonText = styled.Text<{ color: string }>`
	font-size: 22px;
	color: ${props => props.color};
`;