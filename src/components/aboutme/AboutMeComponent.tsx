import React from 'react';
import {Image, Text, useColorScheme, View} from 'react-native';
import {Styles} from '../../helpers/Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const AboutMeComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={Styles(isDarkMode).viewStyle}>
      <Image
        source={require('../../../assets/images/85190332.jpg')}
        style={{width: '100%', height: '65%'}}
      />
      <View style={Styles(isDarkMode).listStyle}>
        <Text style={Styles(isDarkMode).item}>
          <IonIcon
            name="information-circle-outline"
            size={22}
            color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
          />
          Nombre: Denisse Furcal Valoy
        </Text>
        <Text style={Styles(isDarkMode).item}>
          <IonIcon
            name="information-circle-outline"
            size={22}
            color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
          />
          Matricula: 2021-0461
        </Text>
      </View>
    </View>
  );
};
