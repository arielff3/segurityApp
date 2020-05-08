import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// import { Container } from './styles';

const AddContact = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack()
  }
  return(
    <View>
      <TouchableOpacity
      onPress={() => navigateBack()}
      >
        <Text style={{color: '#fff'}}>
        voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddContact;
