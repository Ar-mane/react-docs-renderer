import styled from "styled-components";

export const PDFToolbar = styled.div`
	align-items: center;
	background-color: #292828 !important;
	border-radius: 6px;
	bottom: 20px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	column-gap: 30px;
	display: flex;
	flex-direction: row;
	height: 42px;
	padding: 0 5px;
	position: absolute;
`;

export const StyledIcon = styled.div`
	align-items: center;
	border-radius: 4px;
	display: flex;
	height: 30px;
	justify-content: center;
	width: 30px;
`;
export const StyledPageController = styled.div`
	align-items: center;
	color: white;
	column-gap: 6px;
	display: flex;
	flex-direction: row;
`;
export const StyledZoomController = styled.div`
	align-items: center;
	color: white;
	column-gap: 4px;
	display: flex;
	flex-direction: row;
`;

export const StyledPageLabel = styled.div`
	align-items: center;
	color: white;
	column-gap: 6px;
	display: flex;
	flex-direction: row;
	font-size: 12px;
	span {
		align-items: center;
		color: white;
		column-gap: 5px;
		display: flex;
		flex-direction: row;
	}
`;
