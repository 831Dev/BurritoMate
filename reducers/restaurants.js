import { handleActions, createAction } from 'redux-actions';

export const REQUEST_YELP = 'REQUEST_YELP';

export const requestYelp = createAction(REQUEST_YELP);
export const requestYelpSuccess = createAction('REQUEST_YELP_SUCCESS');
export const requestYelpFailure = createAction('REQUEST_YELP_FAILURE');
export const chooseRestaurant = createAction('CHOOSE_RESTAURANT');

const fixture = {"id": "culturas-hidalgo-and-oaxaca-restaurant-salinas", "name": "Culturas Hidalgo & Oaxaca Restaurant", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/YwAAdvrO6DUCoSCCihYNxA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/culturas-hidalgo-and-oaxaca-restaurant-salinas?adjust_creative=P3Zumf0TmVQhRK8hxDd3HQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=P3Zumf0TmVQhRK8hxDd3HQ", "review_count": 77, "categories": [{"alias": "mexican", "title": "Mexican"}], "rating": 4.5, "coordinates": {"latitude": 36.6774953922191, "longitude": -121.639552329111}, "transactions": [], "price": "$", "location": {"address1": "473 E Market St", "address2": "", "address3": null, "city": "Salinas", "zip_code": "93905", "country": "US", "state": "CA", "display_address": ["473 E Market St", "Salinas, CA 93905"]}, "phone": "+18319754766", "display_phone": "(831) 975-4766", "distance": 1321.144458036716};

const initialState = {
    isLoadingRestaurants: false,
    restaurants: [JSON.stringify(fixture)],
    chosenRestaurant: null,
    errorLoadingRestaurants: ''
};

export default handleActions({
    'REQUEST_YELP': (state, action) => ({
        isLoadingRestaurants: true,
        ...state
    }),
    'REQUEST_YELP_SUCCESS': (state, action) => {
        return {
            ...state,
            isLoadingRestaurants: false,
            restaurants: action.payload.map((restaurant) => JSON.stringify(restaurant)),
        }
    },
    'CHOOSE_RESTAURANT': (state, action) => ({
        ...state,
        chosenRestaurant: state.restaurants[action.payload]
    })
}, initialState);
