import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const PacienteItem = ({item}: {item: any}) => {
  const formatearFecha = (fecha: Date) => {
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return (
    <View style={styles.container}>

        <Text>Paciente: {item.paciente}</Text>
        <Text>Dueño: {item.dueño}</Text>
        <Text>Fecha: {formatearFecha(item.fecha)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:20,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:10
    }
    
})

export default PacienteItem