import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Splash from './components/Splash';
import Cards from './containers/Cards';
import Favorites from './components/Favorites';
import RestaurantDetails from './containers/RestaurantDetails';

const AppNavigator = StackNavigator({
    Splash: { screen: Splash, navigationOptions: { header: null } },
    Cards: { 
        screen: TabNavigator({
            Cards: {
                screen: Cards,
                navigationOptions: ({ navigation }) => ({})
            },
            Favorites: {
                screen: Favorites,
                navigationOptions: ({ navigation }) => ({})
            }
        }, {
            navigationOptions: {
                headerLeft: null,
                headerTitle: 'BURRITOMATE',
                headerTitleStyle: {
                    color: '#e32929',
                    alignSelf: 'center'
                },
                headerStyle: {
                    backgroundColor: 'white'
                }
            },
            tabBarComponent: NavigationComponent,
            tabBarPosition: 'bottom',
            swipeEnabled: false,
            tabBarOptions: {
                bottomNavigationOptions: {
                    labelColor: '#e32929',
                    rippleColor: '#e32929',
                    tabs: {
                        Cards: {
                            barBackgroundColor: 'white'
                        },
                        Favorites: {
                            barBackgroundColor: 'white'    
                        }
                    }
                }
            }
        })
    },
    RestaurantDetails: {
        screen: RestaurantDetails
    }
});

export default AppNavigator;
