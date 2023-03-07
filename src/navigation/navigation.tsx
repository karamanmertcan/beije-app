import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAtom} from 'jotai';
import {Image, StyleSheet} from 'react-native';

import {userAtom} from '../utils/atoms';
import navigationRef from '../utils/navigation-ref';
import Storage from '../utils/storage';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [user, setUser] = useAtom(userAtom);

  if (user) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
      initialRouteName={'Main'}>
      <>
        <>
          <Stack.Screen
            name="Main"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      </>
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const routeNameRef = React.useRef();

  const onStateChange = async () => {
    // const previousRouteName = routeNameRef.current
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    routeNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      // onReady={onReady}
      onStateChange={onStateChange}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
