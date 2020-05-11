import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';

export default class Main extends Component{
    static navigationOptions = {
        title: 'Bem vindo ao Cervical Cancer Risk',
        headerStyle: {
            backgroundColor: '#f4511e',
            
            },
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:"center", 
            flex:1     
            },        
    };
 
    
    render() {
        return(
            <View style = { styles.container}>
                <StatusBar
                    barStyle = "light-content"
                    backgroundColor = "#f4511e"
                    hidden = {false}
                />
                <View style = {styles.presentation}>
                    <Text style = {styles.PresentationText}>
                        Este aplicativo foi criado para medir o seu risco de desenvolver câncer de 
                        colo uterino, baseado em respostas sobre você. 
                        O teste é realizado em menos de 2 minutos. Preste bastante atenção às alternativas.
                    </Text>
                    <Text style = {styles.TextRemeber}>
                        <Text style = {{fontWeight: 'bold'}}>Lembre-se</Text>, esse teste não substitue a consulta presencial ao ginecologista.
                    </Text>
                </View>
                <View style = {styles.ButtonBox}>
                    <TouchableOpacity style = {styles.Button} onPress = { () => this.props.navigation.navigate('FirstPage')}>
                        <Text style = {styles.TextButton}>Iniciar Teste</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        justifyContent: 'center',
        alignContent: 'center'


    },
    
    presentation: {
        marginTop: 70,
        marginLeft: 50,
        marginRight: 50,
        justifyContent:'center',
        alignItems: 'center',


    },

    PresentationText: {
        fontSize: 16,
        textAlign: 'center',    

    },

    ButtonBox:{
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },

    Button: {
        borderColor: "#f4511e",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 160,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    },

    TextRemeber: {
        fontSize: 16,
        textAlign: 'center',  
        marginTop: 24
        

    },

    TextButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#f4511e"
    }


})