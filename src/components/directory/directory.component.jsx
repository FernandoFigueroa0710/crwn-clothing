import React from "react";
import MenuItem from "../menu-item/menuItem.component";
import {DirectoryMenuContainer} from "./directory.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ categories }) => (
	<DirectoryMenuContainer>
		{categories.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenuContainer>
);
const mapStateToProps = createStructuredSelector({
	categories: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
