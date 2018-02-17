import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Home from './components/Home';
import Cards from './components/Cards';
import Favorites from './components/Favorites';

const AppNavigator = StackNavigator({
    Splash: { screen: Home, navigationOptions: { header: null } },
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
                headerTitle: 'FIND MY BURRITO',
                headerTitleStyle: {
                    color: 'white'
                },
                headerStyle: {
                    backgroundColor: '#e32929'
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
    }
});

export default AppNavigator;
