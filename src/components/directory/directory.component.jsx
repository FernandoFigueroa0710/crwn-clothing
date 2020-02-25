import React from "react";
import MenuItem from "../menu-item/menuItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ categories }) => (
	<div className="directory-menu">
		{categories.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);
const mapStateToProps = createStructuredSelector({
	categories: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
