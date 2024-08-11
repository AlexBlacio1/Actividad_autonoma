import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1'; // Asegúrate de que la ruta sea correcta
import Screen2 from '../screens/Screen2'; // Asegúrate de que la ruta sea correcta
import { RootStackParamList } from '../types'; // Asegúrate de que la ruta sea correcta

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Screen1"
                component={Screen1}
                options={{ title: 'Inicio' }}
            />
            <Stack.Screen
                name="Screen2"
                component={Screen2}
                options={{ title: 'Formulario' }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
