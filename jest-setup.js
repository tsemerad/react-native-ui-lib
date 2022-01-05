import {NativeModules, AccessibilityInfo} from 'react-native';

require('./node_modules/react-native-reanimated/src/reanimated2/jestUtils').setUpTests();

NativeModules.StatusBarManager = {getHeight: jest.fn()};
jest.spyOn(AccessibilityInfo, 'isScreenReaderEnabled').mockImplementation(() => new Promise.resolve(false));

// mock native modules
jest.mock('@react-native-community/blur', () => {});
jest.mock('@react-native-community/netinfo', () => {});
jest.mock('react-native-reanimated', () => {
  const reactNativeReanimated = require('react-native-reanimated/mock');
  // TODO: revet this part once reanimated has released it (https://github.com/software-mansion/react-native-reanimated/pull/2748)
  reactNativeReanimated.interpolateColor = jest.fn();
  return reactNativeReanimated;
});
global.__reanimatedWorkletInit = jest.fn();
jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-native-picker/picker', () => ({Picker: {Item: {}}}));
jest.mock('react-native', () => {
  const reactNative = jest.requireActual('react-native');
  reactNative.NativeModules.KeyboardTrackingViewTempManager = {};
  return reactNative;
});
