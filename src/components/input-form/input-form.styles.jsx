import styled, { css } from "styled-components";

const mainColor = "#000";
const subColor = "#333";

const shrinkLabelStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${mainColor};
`;

export const GroupContainer = styled.div`
	position: relative;
	margin: 45px 0;
`;

export const FormInputContainer = styled.input`
	background: none;
	background-color: #fff;
	color: ${subColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColor};
	&:focus {
		outline: none;
	}
	&:focus ~ .form-input-label {
		${shrinkLabelStyles}
	}
	input[type="password"] {
		letter-spacing: 0.3em;
	}
`;

export const FormInputLabel = styled.label`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles}
	}
`;
