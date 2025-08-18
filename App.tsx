import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  FlatList,
  View,
  Alert,
} from 'react-native';

import Formulario from './src/components/Formulario';
import PacienteItem from './src/components/PacienteItem';
import ModalDetalle from './src/components/ModalDetalle';


interface Paciente {
  id: string;
  paciente: string;
  dueño: string;
  email: string;
  telefono: string;
  fecha: Date;
  sintomas: string;
}

function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDetalle, setModalDetalle] = useState(false);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [paciente, setPaciente] = useState<Paciente | null>(null);

  const pacienteEditar = (id: any) => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEditar[0]);
    setModalVisible(true);
  };

  const pacienteEliminar = (id: any) =>{
    console.log(`Intentando eliminar paciente con id: ${id}`);
    Alert.alert(
      `Seguro que deseas eliminar este paciente?`,
      "Esta acción no se puede deshacer",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            console.log(`Paciente con id: ${id} eliminado`);

            const nuevosPacientes = pacientes.filter(paciente => paciente.id !== id);
            setPacientes(nuevosPacientes);
          },
        },
      ]
    );
  }

  const nuevaCitaHandler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>

      <Pressable onPress={nuevaCitaHandler} style={styles.btnNuevaCita}>
        <Text style={styles.txtBtnNuevaCita}>Nueva Cita</Text>
      </Pressable>

      <Formulario
        modalVisible={modalVisible}
        nuevaCitaHandler={nuevaCitaHandler}
        pacientes={pacientes}
        pacienteObj={paciente}
        setPacientes={setPacientes}
      />

      <Modal visible={modalDetalle} animationType='fade'>
        <ModalDetalle paciente={paciente} setModalDetalle={setModalDetalle}/>
      </Modal>

      {pacientes.length === 0 ? (
        <Text style={styles.tituloBold}>No hay citas</Text>
      ) : (
        <View>
          <Text style={styles.tituloBold}>Citas ({pacientes.length}) :</Text>
          <FlatList
            style={styles.list}
            data={pacientes}
            keyExtractor={(item: any) => item.id}
            renderItem={({item}) => (
              <PacienteItem
                item={item}
                setModalVisible={setModalVisible}
                setPaciente={pacienteEditar}
                setPacienteEliminar={pacienteEliminar}
                setModalDetalle={setModalDetalle}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: '#374151',
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  txtBtnNuevaCita: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  list: {
    marginTop: 50,
    marginHorizontal: 20,
  },
});

export default App;
