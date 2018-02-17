import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Home from './components/Home';
import Cards from './components/Cards';

const AppNavigator = StackNavigator({
    Splash: { screen: Home, navigationOptions: { header: null } },
    Cards: { 
        screen: TabNavigator({
            Cards: {
                screen: Cards,
                navigationOptions: ({ navigation }) => ({
                    title: 'Find My Burrito'
                })
            }
        })
    }
});

export default AppNavigator;
