import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CategoryPage from "../categories/category.component";
import CollectionsOverview from "../../collections-overview/collections-overview.component";
import WithSpinner from "../../with-spinner/with-spinner.component";
import {
	firestore,
	convertCollectionSnapshotToMap
} from "../../utils/firebase.utils";
import { updateCollections } from "../../../redux/shop/shop.action";
const CollectionsOverViewWithSPinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
class ShopPage extends Component {
	state = {
		loading: true
	};
	unsubcribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.onSnapshot(async snapShot => {
			const collectionsMap = convertCollectionSnapshotToMap(snapShot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}
	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverViewWithSPinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CategoryPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
