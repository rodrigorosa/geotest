import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Button, View, Text, StyleSheet, CheckBox} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CurrentPosition = () => {
  const [isSelected, setSelection] = useState(true);
  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (e) => setError(e.message),
      {enableHighAccuracy: isSelected},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Position</Text>

      <View style={styles.content}>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <>
            <Text>Latitude: {position.latitude}</Text>
            <Text>Longitude: {position.longitude}</Text>

            <View style={styles.checkboxContainer}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text style={styles.label}>Use GPS</Text>
            </View>

            <Button title="Update Current Position" onPress={getPosition} />
          </>
        )}
      </View>
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

export default CurrentPosition;
