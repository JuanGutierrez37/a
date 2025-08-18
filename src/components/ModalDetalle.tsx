import React, {useState, useEffect} from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

const ModalDetalle = (
  {
    paciente,
    setModalDetalle

  } : {
    paciente: any,
    setModalDetalle: (visible: boolean) => void
  }) => {

  console.log('ModalDetalle paciente:', paciente);
  

  return (
    <SafeAreaView>
        <View>
          <Pressable onPress={() => setModalDetalle(false)}>
            <Text>Cerrar</Text>
          </Pressable>
        </View>
        <Text>Detalles del Paciente</Text>

    </SafeAreaView>
  );
}
export default ModalDetalle;