import { handleActions } from 'redux-actions';
import { NavigationActions } from 'react-navigation';

import AppNavigator from '../Navigators';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Splash')
);

export default handleActions({
    'Cards': (state, action) => {
        const nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Cards' }),
            state
        );
        return nextState || state;
    },
    'Favorites': (state, action) => {
        const nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Favorites' }),
            state
        )
        return nextState || state;
    },
    'RestaurantDetails': (state, action) => {
        const nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'RestaurantDetails' }),
            state
        )
        return nextState || state;
    },
    [NavigationActions.NAVIGATE]: (state, action) => {
        return AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: action.routeName }),
            state
        );
    },
    [NavigationActions.BACK]: (state, action) => {
        if (state.index === 0) {
            return state;
        }
        return AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
        );
    }
}, initialState);
