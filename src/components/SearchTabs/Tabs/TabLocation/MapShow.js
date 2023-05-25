import React from 'react';
import YaMap from 'react-native-yamap';

const route = {
  start: { lat: 0, lon: 0},
  end: { lat: 10, lon: 10},
};

export default class MapShow extends React.Component {
  handleOnRouteFound(event) {
    console.log(event.nativeEvent.routes);
  }

  render() {
    return (
      <YaMap
        userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
        style={{ flex: 1 }}
      />
    );
  }
}