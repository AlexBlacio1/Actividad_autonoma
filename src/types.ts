import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Screen1: undefined;
    Screen2: undefined;
};

export type Screen1NavigationProp = StackNavigationProp<RootStackParamList, 'Screen1'>;
