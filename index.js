import 'react-native-gesture-handler';
import react from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './app/shared/store/store';

const reduxAppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>);
}

AppRegistry.registerComponent(appName, () =>App );
