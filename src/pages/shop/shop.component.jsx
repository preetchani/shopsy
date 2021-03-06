import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router";
import CollectonPage from "../collection/collection.component";
const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path = {`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectonPage}/>
    </div>
  );
};

export default ShopPage;