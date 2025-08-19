import React, {useState, useEffect} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ModalDetalle = ({
  paciente,
  setModalDetalle,
  setPaciente
}: {
  paciente: any;
  setModalDetalle: (visible: boolean) => void;
  setPaciente: (paciente: any) => void;

}) => {
  console.log('ModalDetalle paciente:', paciente);

  const formatearFecha = (fecha: Date) => {
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion
        <Text style={styles.tituloBold}> Paciente</Text>
      </Text>
      <View>
        <Pressable
          onPress={() => {
            setModalDetalle(false);
            setPaciente(null);
          }}
          style={styles.btnCancelar}>
          <Text style={styles.txtBtnCancelar}>X Cerrar</Text>
        </Pressable>
      </View>
      <View style={styles.contenido}>
        <View style= {styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{paciente?.paciente}</Text>
        </View>

        <View style= {styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.value}>{paciente?.dueño}</Text>
        </View>

        <View style= {styles.campo}>
          <Text style={styles.label}>Telefono:</Text>
          <Text style={styles.value}>{paciente?.telefono}</Text>
        </View>

        <View style= {styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{paciente?.email}</Text>
        </View>

        <View style= {styles.campo}>
          <Text style={styles.label}>Fecha:</Text>
          <Text style={styles.value}>{formatearFecha(paciente?.fecha)}</Text>
        </View>

        <View style= {styles.campo}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text style={styles.value}>{paciente?.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFA500',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 30,
    color: 'white',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    backgroundColor: '#c07d00ff',
    padding: 20,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtBtnCancelar: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 40,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  campo:{
    marginBottom: 10
  },
  label:{
    textTransform: "uppercase",
    color: "#374151",
    fontWeight: "700",
  },
  value: {
    fontWeight: "700",
    fontSize: 22

  }
});
export default ModalDetalle;
