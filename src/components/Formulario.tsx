import React, {useState, useEffect} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({
  modalVisible,
  nuevaCitaHandler,
  setPacientes,
  pacientes,
  pacienteObj,
}: {
  modalVisible: boolean;
  nuevaCitaHandler: () => void;
  setPacientes: (pacientes: any[]) => void;
  pacientes: any[];
  pacienteObj: any;
}) => {
  const [paciente, setPaciente] = useState('');
  const [id, setId] = useState(null);
  const [dueño, setDueño] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    console.log('pacienteObj', pacienteObj);

    if (pacienteObj) {
      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setDueño(pacienteObj.dueño);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setFecha(new Date(pacienteObj.fecha));
      setSintomas(pacienteObj.sintomas);
    } else {
      setId(null);
      setPaciente('');
      setDueño('');
      setEmail('');
      setTelefono('');
      setFecha(new Date());
      setSintomas('');
    }
  }, [pacienteObj]);

  const handleSave = () => {
    if ([paciente, dueño, email, telefono, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const isEdit = id != null;

    const nuevoPaciente = {
      id: id ?? Date.now(),
      paciente,
      dueño,
      email,
      telefono,
      fecha,
      sintomas,
    };

    if (isEdit){
      console.log("EDITANDO");
      
      setPacientes(pacientes.map(p => p.id === id ? nuevoPaciente : p));
    }else{
      console.log("NUEVO");
      setPacientes([...pacientes, nuevoPaciente]);
    }

 
    nuevaCitaHandler();

    setPaciente('');
    setDueño('');
    setEmail('');
    setTelefono('');
    setFecha(new Date());
    setSintomas('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>Formulario</Text>

          <Pressable onPress={nuevaCitaHandler} style={styles.btnCancelar}>
            <Text style={styles.txtBtnCancelar}>X Cancelar</Text>
          </Pressable>

          <View style={styles.formulario}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor={'gray'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.formulario}>
            <Text style={styles.label}>Nombre Dueño</Text>
            <TextInput
              style={styles.input}
              placeholder="Dueño"
              placeholderTextColor={'gray'}
              value={dueño}
              onChangeText={setDueño}
            />
          </View>

          <View style={styles.formulario}>
            <Text style={styles.label}>Email Dueño</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'gray'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.formulario}>
            <Text style={styles.label}>Telefono Dueño</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono"
              placeholderTextColor={'gray'}
              keyboardType="numeric"
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>

          <View style={styles.formulario}>
            <Text style={styles.label}>Fecha</Text>
            <DatePicker date={fecha} onDateChange={date => setFecha(date)} />
          </View>

          <View style={styles.formulario}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.areaInput]}
              placeholder="Sintomas"
              placeholderTextColor={'gray'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={7}
            />
          </View>

          <Pressable onPress={handleSave} style={styles.btnGuardar}>
            <Text style={styles.txtBtnGuardar}>Guardar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D28D9',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 30,
    color: 'white',
  },
  label: {
    color: 'white',
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '500',
  },
  formulario: {
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    color: 'black',
  },
  areaInput: {
    height: 100,
  },
  btnCancelar: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  txtBtnCancelar: {
    color: '#6D28D9',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  btnGuardar: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  txtBtnGuardar: {
    color: '#6D28D9',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default Formulario;
