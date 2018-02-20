import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RestaurantDetails from '../components/RestaurantDetails';

const mapStateToProps = state => {
  const { chosenRestaurant } = state.restaurants

  return {
    chosenRestaurant
  };
}

const RestaurantDetailsContainer = connect(
  mapStateToProps
)(RestaurantDetails);

export default RestaurantDetailsContainer;