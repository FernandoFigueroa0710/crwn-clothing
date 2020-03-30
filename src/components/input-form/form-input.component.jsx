import React from "react";
import {
	GroupContainer,
	FormInputContainer,
	FormInputLabel
} from "./input-form.styles";

const FormInput = ({ handleChange, label, ...props }) => {
	return (
		<GroupContainer>
			<FormInputContainer onChange={handleChange} {...props} />
			{label ? (
				<FormInputLabel className={props.value.length ? "shrink" : ""}>
					{label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	);
};
export default FormInput;
