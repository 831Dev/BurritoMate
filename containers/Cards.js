import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cards from '../components/Cards';
import { requestYelp, chooseRestaurant } from '../reducers/restaurants';

const mapStateToProps = state => {
  const { restaurants } = state.restaurants

  return {
    restaurants
  };
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ 
    requestYelp, chooseRestaurant
  }, dispatch);

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

export default CardContainer;