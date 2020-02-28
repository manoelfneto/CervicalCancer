import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';

export default class FirstPage extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerLeft = null;
        let headerTitle = "Resultado";   
        let headerStyle = {backgroundColor: '#F0E68C'};
        return { headerStyle, headerTitle, headerLeft} 
    }

    constructor(props) {
        super(props)
        this.state = {
            result: this.props.navigation.getParam('result', 'no_result')
        }
    }
      

    _VerifyQuestions(){
        navigation.navigate('SecondPage')
    };
   


    render(){
        return (
            <SafeAreaView style = {styles.Container}>
                <View style = {styles.Result}>
                    {this.state.result <= 11 ? 
                        <Text style = {styles.ResultText}>
                            Muito baixo
                        </Text>: null }

                    {this.state.result > 11 && this.state.result <=20 ? 
                        <Text style = {styles.ResultText}>
                            Baixo
                        </Text>: null }
                    
                    {this.state.result > 20 && this.state.result <=29 ?
                        <Text style = {styles.ResultText}>
                        Moderado
                    </Text>: null }

                    {this.state.result > 30 && this.state.result <=52 ?
                        <Text style = {styles.ResultText}>
                        Alto
                    </Text>: null }

                    {this.state.result > 52 ?
                        <Text style = {styles.ResultText}>
                        Muito Alto
                    </Text>: null }

                    
                </View>

                <View style = {styles.informations}>
                    {this.state.result < 11 ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é muito baixa. De qualquer maneira, é importante manter os hábitos
                        alimentares e as consultas em dia.
                        </Text>: null }
                    
                        {this.state.result < 11 && this.state.result <=20 ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é baixa. De qualquer maneira, é importante manter os hábitos
                        alimentares e as consultas em dia.
                        </Text>: null }
                        
                        {this.state.result < 20 && this.state.result <=29  ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é baixa. De qualquer maneira, é importante manter os hábitos
                        alimentares e as consultas em dia.
                        </Text>: null }

                        {this.state.result < 30 && this.state.result <=52 ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é baixa. De qualquer maneira, é importante manter os hábitos
                        alimentares e as consultas em dia.
                        </Text>: null }

                        {this.state.result < 52 ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é baixa. De qualquer maneira, é importante manter os hábitos
                        alimentares e as consultas em dia.
                        </Text>: null }
                
                    <Text style = {styles.informationText}>
                        <Text style = {{fontWeight: 'bold'}}>Lembre-se</Text>, qualquer tipo de lesão deve ser tratada, procure um médico ginecologista.
                    </Text>
                </View>


                <View style= {styles.ButtonBox} >
                    <TouchableOpacity onPress = { () => this.props.navigation.navigate('main')} style = {styles.Button}>
                        <Text style = {styles.ButtonText}>
                            Encerrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: 'white'

    },

    Result: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'

    },

    ResultText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green'

    },

    informations: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,

    },

    informationText: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'justify'
    },


    Text: {
        fontSize: 24,
        textAlign: 'center'

    },

    ButtonBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    Button: {
        borderColor: "#F0E68C",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 100,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    },

    ButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#F0E68C"
    }

})


