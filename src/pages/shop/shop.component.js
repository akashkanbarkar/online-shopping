import React, { Component } from 'react';
import  SHOP_DATA  from "./shop.data";
import CollectionPreview from "../../components/collectipon-preview/collection-preview.component"

class ShopPage extends Component {
    constructor(props){
        super(props)
        this.state= {
            collection : SHOP_DATA
        }
    }
    render() {
        return (
            <div>
               {this.state.collection.map(({id,...otherCollectionProps})=>(
                   <CollectionPreview key ={id} {...otherCollectionProps}/>
               ))}
            </div>
        );
    }
}

export default ShopPage;