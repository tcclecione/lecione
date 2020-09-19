import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
} from 'native-base';
import styles from './styles';
import { Avatar } from 'common/components'
import { ScrollView, TouchableOpacity, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import TextInputMask from 'react-native-text-input-mask';
import * as yup from 'yup'
import moment from 'moment';

class Create extends Component {
  validationSchema = () => yup.object().shape({
    email: !this.props.isResponsible ? yup
      .string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório") : null,
    cpf: yup.string()
      .required('CPF é obrigatório!')
      .min(11, 'CPF é necessário 11 caracteres')
      .required('CPF é obrigatório!'),
    name: !this.props.isResponsible ? yup.string()
      .required('Nome é obrigatório!')
      .trim()
      .max(30, 'Nome ultrapassou o limite de 30 caracteres') : null,
    phone: !this.props.isResponsible ? yup.string()
      .min(11, 'Celular é necessário o mínimo de 11 caracteres') : null,
    occupation: !this.props.isResponsible ? yup.string()
      .trim()
      .max(255, 'Profissão ultrapassou o limite de 255 caracteres') : null,
    date_birth: !this.props.isResponsible ? yup.string()
      .required('Data de nascimento é obrigatório!')
      .test('date_birth', 'Data inválida', value => moment(value, 'DDMMYYYY').isValid())
      .test('date_birth', 'Data deve ser menor ou igual a data atual!', value => moment(new Date(), 'DDMMYYYY') > moment(value, 'DDMMYYYY')
        || moment(new Date(), 'DDMMYYYY') === moment(value, 'DDMMYYYY')) : null,
    password: yup.string()
      .required('Senha é obrigatório!')
  })

  render() {
    const { responsible, onPress, search, isResponsible } = this.props;
    return (
      <View style={{ backgroundColor: '#22262a', flex: 1 }}>
        <Formik
          onSubmit={values => {
            onPress(values)
          }}
          initialValues={{
            cpf: responsible ? responsible.cpf : '',
            email: responsible ? responsible.email : '',
            name: responsible ? responsible.name : '',
            phone: responsible ? responsible.phone : '',
            occupation: responsible ? responsible.occupation : '',
            marital_status: responsible ? responsible.marital_status : '',
            date_birth: responsible ? responsible.date_birth : '',
            password: ''
          }}
          validationSchema={this.validationSchema()}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <ScrollView>
                <Avatar
                  image={responsible ? responsible.image : null}
                  name={responsible ? responsible.name : null}
                />
                <View style={{ padding: 10, flex: 1, marginTop: 10 }}>
                  <TextInputMask
                    style={styles.input}
                    placeholder="CPF"
                    placeholderTextColor='gray'
                    refInput={ref => { this.input = ref }}
                    value={values.cpf}
                    onChangeText={(formatted, extracted) => {
                      handleChange(values.cpf = extracted)
                    }}
                    onBlur={() => search(values.cpf)}
                    mask={"[000].[000].[000]-[00]"}
                  />
                  {errors.cpf &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.cpf}</Text>
                  }
                  <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor='gray'
                    editable={!isResponsible}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur}
                    value={responsible ? responsible.name : values.name}
                    selectionColor='#428AF8'
                  />
                  {(errors.name && !isResponsible) &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.name}</Text>
                  }
                  <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    editable={!isResponsible}
                    placeholderTextColor='gray'
                    onChangeText={handleChange('email')}
                    value={responsible ? responsible.email : values.email}
                    selectionColor='#428AF8'
                  />
                  {errors.email &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.email}</Text>
                  }
                  <TextInputMask
                    style={styles.input}
                    placeholder="Celular"
                    editable={!isResponsible}
                    placeholderTextColor='gray'
                    refInput={ref => { this.input = ref }}
                    value={responsible ? responsible.phone : values.phone}
                    onChangeText={(formatted, extracted) => {
                      handleChange(values.phone = extracted)
                    }}
                    mask={"([00]) [00000]-[0000]"}
                  />
                  {errors.phone &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.phone}</Text>
                  }
                  <TextInput
                    style={styles.input}
                    placeholder="Profissão"
                    editable={!isResponsible}
                    placeholderTextColor='gray'
                    onChangeText={handleChange('occupation')}
                    onBlur={this.handleBlur}
                    value={responsible ? responsible.occupation : values.occupation}
                    onFocus={this.handleFocus}
                    selectionColor='#428AF8'
                  />
                  {errors.occupation &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.occupation}</Text>
                  }
                  <TextInput
                    style={styles.input}
                    placeholder="Estado civil"
                    editable={!isResponsible}
                    placeholderTextColor='gray'
                    onChangeText={handleChange('marital_status')}
                    onBlur={this.handleBlur}
                    value={responsible ? responsible.marital_status : values.marital_status}
                    onFocus={this.handleFocus}
                    selectionColor='#428AF8'
                  />
                  {errors.marital_status &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.marital_status}</Text>
                  }
                  <TextInputMask
                    style={styles.input}
                    placeholder="Data de nascimento"
                    editable={!isResponsible}
                    placeholderTextColor='gray'
                    refInput={ref => { this.input = ref }}
                    value={responsible ? moment(responsible.date_birth, 'YYYY-MM-DD').format('DD/MM/YYYY') : values.date_birth}
                    onChangeText={(formatted, extracted) => {
                      handleChange(values.date_birth = extracted)
                    }}
                    mask={"[00]/[00]/[0000]"}
                  />
                  {errors.date_birth &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.date_birth}</Text>
                  }
                  <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor='gray'
                    onChangeText={handleChange('password')}
                    onBlur={this.handleBlur}
                    value={values.password}
                    onFocus={this.handleFocus}
                    selectionColor='#428AF8'
                    secureTextEntry={true}
                  />
                  {errors.password &&
                    <Text style={{ fontSize: 10, color: 'orange' }}>{errors.password}</Text>
                  }

                </View>
              </ScrollView>
              <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={handleSubmit} style={{ padding: 10, height: 100, backgroundColor: '#CC9D41', height: 50, borderRadius: 2 }}>
                  <Text style={{ textAlign: 'center', color: '#FFF' }}>Criar conta</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    );
  }
}

export default connectStyle('hack.Create', styles, Create);
