import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
import database from '@react-native-firebase/database';


export default class FourthPage extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerStyle = {backgroundColor: '#4B0082' };
        let headerTintColor= '#FFFFFF';
        let headerRight = (
            <TouchableOpacity onPress = { () => navigation.navigate('Result')} style = {styles.buttonHeader}>
                <Text style = {{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Finalizar</Text>
            </TouchableOpacity>
        )
        return { headerStyle, headerRight, headerTintColor} 
    }

    constructor(props) {
        super(props)
        this.state = {
            parterns: '',
            condon: '',
            hpvTest: '',
            citoOnco: '',
            colposc: '',
            hpvVaccine: '',
            pageFourValue: 0,

            age: this.props.navigation.getParam('age', 'no_age'),  
            firstSexual: this.props.navigation.getParam('firstSexual', 'no_sexual'),
            gesta: this.props.navigation.getParam('gesta', 'no_gesta'),
            para: this.props.navigation.getParam('para', 'no_para'),
            abort: this.props.navigation.getParam('abort', 'no_abort'),
            pageOneValue: this.props.navigation.getParam('pageOneValue', 'no_valueOne'),

            fruits: this.props.navigation.getParam('fruits', 'no_fruits'),
            city: this.props.navigation.getParam('city', 'no_city'),
            infectDesease: this.props.navigation.getParam('infectDesease', 'no_infectDs'),
            smoker: this.props.navigation.getParam('smoker', 'no_smoker'),
            pageTwoValue: this.props.navigation.getParam('pageTwoValue', 'no_valueTwo'),

            cancerFamily: this.props.navigation.getParam('cancerFamily', []),
            kindOfCancer: this.props.navigation.getParam('kindOfCancer', []),
            HASorDM: this.props.navigation.getParam('HASorDM', []),
            cort: this.props.navigation.getParam('cort', 'no_cort'),
            pageThreeValue: this.props.navigation.getParam('pageThreeValue', 'no_valueThree'),

            ResultValue: 0,
        }
    }

    _CleanState(){
        this.setStat({parterns: ''})
        this.setState({condon: ''})
        this.setState({hpvTest: ''})
        this.setState({citoOnco: ''})
        this.setState({colposc: ''})
        this.setState({hpvVaccine: ''})
    }

    

    _Post_firebase(){
        let exame = {
            parterns: this.state.parterns,
            condon: this.state.condon,
            hpvTest: this.state.hpvTest,
            citoOnco: this.state.citoOnco,
            colposc: this.state.colposc,
            hpvVaccine: this.state.hpvVaccine,

            age: this.state.age,
            firstSexual: this.state.firstSexual,
            gesta: this.state.gesta,
            para: this.state.para,
            abort: this.state.abort,

            fruits: this.state.fruits,
            city: this.state.city,
            infectDesease: this.state.infectDesease,
            smoker: this.state.smoker,

            cancerFamily: this.state.cancerFamily,
            kindOfCancer: this.state.kindOfCancer,
            HASorDM: this.state.HASorDM,
            cort: this.state.cort
        }
        let dbRef = database().ref('exames')
        dbRef.push({
            exame
        })
    }
  
  
    
    _VerifyQuestions(){
        this._Post_firebase();
        navigation.navigate('SecondPage')
    };

    _GoResult(){
        this.props.navigation.navigate('FourthPage', {  
            ResultValue: this.state.ResultValue})
    }
   


    render(){
        const { navigation } = this.props;  
        const age = navigation.getParam('age', 'no_age');  
        const fruit = navigation.getParam('fruits', 'no_fruits')

        return (
            <ScrollView>
                <SafeAreaView style = {styles.Container}>
                    <View style = {styles.QuestionsBox}>
                        <Text>age: {JSON.stringify(age)}</Text> 
                        <Text>fruit: {JSON.stringify(fruit)}</Text> 
                        <View style = {styles.QuestionsText}>
                            <Text style= {styles.Text}>Quantos parceiros, homens, você teve no ultimo ano?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({parterns: "1 a 5"})}  underlayColor="black">
                                <Text style = {styles.ButtonText}>1 a 5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({parterns: "6 a 10"})}  underlayColor="white">
                                <Text style = {styles.ButtonText}>6 a 10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({parterns: "11 a 20"})}  underlayColor="white">
                                <Text style = {styles.ButtonText}>11 a 20</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({parterns: "mais 20"})}  underlayColor="white">
                                <Text style = {styles.ButtonText}>mais 20</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({parterns: "nenhum"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>nenhum</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você usa preservativo?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({condon: "sim"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({condon: "sempre"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>sempre</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({condon: "não"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>Não</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({condon: "nunca"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>nunca</Text>
                            </TouchableOpacity>
                        </View>
            
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você já realizou o teste HPV? Qual o resultado?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({hpvTest: "negativo"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>negativo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({hpvTest: "positivo oncogenico"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>positivo oncogenico</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({hpvTest: "não fiz"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>não fiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({hpvTest: "positivo não oncogenico"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>positivo não oncogenico</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você já fez o papanicolau? Qual o resultado?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({citoOnco: "não fiz"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>não fiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({citoOnco: "negativo"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>negativo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({citoOnco: "positivo"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>positivo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você já fez a colposcopia? Qual o resultado?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({colposc: "não fiz"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>não fiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({colposc: "negativo"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>negativo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({colposc: "positivo"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>positivo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você já tomou a vacina contra HPV?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({hpvVaccine: "nunca"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>nunca</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({hpvVaccine: "mais 5 anos"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>há mais de 5 anos</Text>
                            </TouchableOpacity>
                        </View>
                        <View  style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({hpvVaccine: "menos 5 anos"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>há menos de 5 anos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this._Post_firebase.bind(this)} style={styles.Button}> 
                            <Text>Finalizar</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    buttonHeader: {
        marginRight: 20,
        fontSize: 30

    },

    Container: {
        flex: 1,
        backgroundColor: 'white'

    },

    QuestionsBox: {
        flex: 1,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 32
        
    },

    QuestionsText:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginBottom: 24,

    },

    Text: {
        fontSize: 24,
        textAlign: 'center'

    },

    ButtonsBox: {
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 32,

    },

    Button: {
        borderColor: "#4B0082",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 96,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    },

    BigButton: {
        borderColor: "#4B0082",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 250,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,


    },

    ButtonText:{
        color: '#4B0082',
        fontSize: 20,
    }
    

})


