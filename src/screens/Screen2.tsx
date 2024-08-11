import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const Screen2: React.FC = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleDivide = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Por favor ingrese números válidos.');
      return;
    }

    if (num2 === 0) {
      if (num1 === 0) {
        setResult('INDETERMINACIÓN');
      } else {
        setResult('NO EXISTE DIVISIÓN PARA CERO');
      }
    } else {
      setResult((num1 / num2).toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de División</Text>
      <InputComponent
        placeholder="Número 1"
        value={value1}
        onChangeText={setValue1}
      />
      <InputComponent
        placeholder="Número 2"
        value={value2}
        onChangeText={setValue2}
      />
      <ButtonComponent
        title="Dividir"
        onPress={handleDivide}
      />
      {result !== null && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen2;
