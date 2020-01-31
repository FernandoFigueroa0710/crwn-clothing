import React , {Component} from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../preview-collection/previewCollection.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state={
      collections: SHOP_DATA
    }
  }

  render(){
    const {collections} = this.state;
    return(
      <div>
        <div className="shop-page">
          {
            collections.map(({id, ...otherCollectionProps})=> (
              <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
          }
        </div>
      </div>
    );
  }
};
export default ShopPage;