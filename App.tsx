import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  FlatList,
  View
} from 'react-native';

import Formulario from './src/components/Formulario';
import PacienteItem from './src/components/PacienteItem';

interface Paciente {
  paciente: string;
  dueño: string;
  email: string;
  telefono: string;
  fecha: Date;
  sintomas: string;
}


function App(): React.JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  const nuevaCitaHandler = ()=> {
    setModalVisible(!modalVisible);
  }

  return (
    <SafeAreaView  
      style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>

      <Pressable 
        onPress={nuevaCitaHandler}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.txtBtnNuevaCita}>Nueva Cita</Text>
      </Pressable>

      <Formulario 
        modalVisible={modalVisible}
        nuevaCitaHandler={nuevaCitaHandler}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />

      {pacientes.length === 0 ? (
        <Text style={styles.tituloBold}>No hay citas</Text>
      ) : (
        <View >
          <Text style={styles.tituloBold}>Citas ({pacientes.length}) :</Text>
          <FlatList
            style={styles.list}
            data={pacientes}
            keyExtractor={(item:any) => item.id}
            renderItem={({item}) => <PacienteItem item={item}/>
            }
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
  tituloBold:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6D28D9',
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  txtBtnNuevaCita:{
    color:"white",
    textAlign:"center",
    fontWeight:"800",
    fontSize: 18,
    textTransform: "uppercase"
  },
  list:{
    marginVertical: 20,
    marginHorizontal: 10
  }
});

export default App;
