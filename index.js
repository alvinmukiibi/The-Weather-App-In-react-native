/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

//this is the root component and it is the one that registers the app, every other component is a child, we export them.
AppRegistry.registerComponent(appName, () => App);
