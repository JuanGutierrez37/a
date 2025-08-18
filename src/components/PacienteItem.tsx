import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const PacienteItem = ({
  item,
  setModalVisible,
  setPaciente,
  setPacienteEliminar,
  setModalDetalle
}: {
  item: any;
  setModalVisible: any;
  setPaciente: any;
  setPacienteEliminar: any;
  setModalDetalle: any;
}) => {
  const formatearFecha = (fecha: Date) => {
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  };
  return (
    <Pressable
      onLongPress={() => {
        setModalDetalle(true);
        
        setPaciente(item.id);
      }}>
    <View style={styles.container}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.name}>{item.paciente}</Text>
      <Text>Fecha: {formatearFecha(item.fecha)}</Text>

      <View style={styles.containerButtons}>
        <Pressable
          style={[styles.btn, styles.btnEditar]}
          onLongPress={() => {
            setModalVisible(true);
            setPaciente(item.id);
          }}>
          <Text style={styles.btnText}>Editar</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, styles.btnEliminar]}
          onLongPress={() => setPacienteEliminar(item.id)}>
          <Text style={styles.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 2,
  },
  label: {
    //fontSize: 16,
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6D28D9',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnEditar: {
    backgroundColor: '#F59E0B',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'white',
    fontSize: 12,
  },
});

export default PacienteItem;
