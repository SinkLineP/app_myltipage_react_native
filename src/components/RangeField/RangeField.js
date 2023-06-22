import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const RangeField = ({ minValue, maxValue, setMinValue, setMaxValue }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidation = (from, to) => {
    if (parseInt(from) >= parseInt(to)) {
      setErrorMessage('Значение "От" должно быть меньше значения "До"');
    } else {
      setErrorMessage('');
    }
  };

  const handleFromValueChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');

    if (numericValue === "0") return;

    setMinValue(numericValue);
    handleValidation(numericValue, maxValue);
  };

  const handleToValueChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');

    if (numericValue === "0") return;

    setMaxValue(numericValue);
    handleValidation(minValue, numericValue);
  };

  return (
    <>
      <Text style={styles.error}>{errorMessage}</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="От"
          value={minValue}
          onChangeText={handleFromValueChange}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="До"
          value={maxValue}
          onChangeText={handleToValueChange}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d2d2d2',
    width: '45%',
    height: 50,
    paddingLeft: 10,
  },
  error: {
    color: '#c74242',
    fontWeight: 'bold',
  },
});

export default RangeField;
