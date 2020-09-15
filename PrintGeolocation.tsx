import React, {useState} from 'react';
import {View, Text, StyleSheet, CheckBox} from 'react-native';
import CurrentPosition from './CurrentPosition';
import WatchedPosition from './WatchedPosition';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const PrintGeolocation = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocation</Text>

      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text style={styles.label}>Use GPS</Text>
      </View>

      <CurrentPosition useGPS={isSelected} />
      <WatchedPosition useGPS={isSelected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  },
  title: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  label: {
    margin: 8,
  },
});

export default PrintGeolocation;
