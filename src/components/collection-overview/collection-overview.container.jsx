import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collection-overview.component";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

//connect (mapStateToProps, WithSpinner) (CollectionsOverview);
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
) (CollectionsOverview);

export default CollectionOverviewContainer;