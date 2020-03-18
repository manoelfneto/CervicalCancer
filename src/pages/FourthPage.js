import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Button, Alert } from 'react-native';
import database from '@react-native-firebase/database';


export default class FourthPage extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerStyle = {backgroundColor: '#4B0082' };
        let headerTintColor= '#FFFFFF';
        let headerRight = (
            <TouchableOpacity onPress = { navigation.getParam('finish') } style = {styles.buttonHeader}>
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
            pageFourValue: [],
            date: '',

            age: this.props.navigation.getParam('age', 'no_age'),  
            firstSexual: this.props.navigation.getParam('firstSexual', 'no_sexual'),
            gesta: this.props.navigation.getParam('gesta', 'no_gesta'),
            para: this.props.navigation.getParam('para', 'no_para'),
            abort: this.props.navigation.getParam('abort', 'no_abort'),
            pageOneValue: this.props.navigation.getParam('pageOneValue', 'no_valueOne'),

            fruits: this.props.navigation.getParam('fruits', 'no_fruits'),
            city: this.props.navigation.getParam('city', 'no_city'),
            infectDesease: this.props.navigation.getParam('infectDesease', []),
            smoker: this.props.navigation.getParam('smoker', 'no_smoker'),
            pageTwoValue: this.props.navigation.getParam('pageTwoValue', 'no_valueTwo'),

            MotherCancer: this.props.navigation.getParam('MotherCancer', []),
            FatherCancer: this.props.navigation.getParam('FatherCancer', []),
            HASorDM: this.props.navigation.getParam('HASorDM', []),
            cort: this.props.navigation.getParam('cort', 'no_cort'),
            pageThreeValue: this.props.navigation.getParam('pageThreeValue', 'no_valueThree'),

            recomendations: []
        }
    }

    validationToPass(){
        if(this.state.parterns == '' || this.state.condon == '' || this.state.hpvTest == '' || this.state.citoOnco == '' || this.state.colposc == '' || this.state.hpvVaccine == ''){
            Alert.alert("você esqueceu de responder alguma pergunta")
        }else{
            return true
        }
    }

    addScore (score){
        var arr = this.state.pageFourValue;
        arr.push(score);
        this.setState({pageFourValue: arr});
    }

    addRecomendation (phrase){
        var tex = this.state.recomendations;
        tex.push(phrase);
        this.setState({recomendations: tex})
    }

    calculatePage(){
        if (this.state.parterns == '1 a 5'){
            this.addScore(1)
        }if (this.state.parterns == "6 a 10") {
            this.addScore(2)
        }if (this.state.parterns == "11 a 20"){
            this.addScore(3)
        }if (this.state.parterns == "mais 20") {
            this.addScore(4)

        }if (this.state.condon == 'sim'){
            this.addScore(1)
        }if (this.state.condon == "não"){
            this.addScore(2)
        }if (this.state.condon == 'nunca'){
            this.addScore(3)

        }if (this.state.citoOnco == 'baixo grau' && (this.state.age == '31 a 55' || this.state.age == '56 a 80' || this.state.age == 'mais 80' )){
            this.addScore(1)
        }if (this.state.citoOnco == 'alto grau' && (this.state.age == '31 a 55' || this.state.age == '56 a 80' || this.state.age == 'mais 80' )){
            this.addScore(2)
        }if (this.state.citoOnco == 'alto grau' && (this.state.age == '0 a 20' || this.state.age == '21 a 30')){
            this.addScore(1)

        }if (this.state.colposc == 'atipica'){
            this.addScore(1)

        }if (this.state.hpvTest == "positivo oncogenico"){
            this.addScore(3)
        }if (this.state.hpvTest == "positivo não oncogenico"){
            this.addScore(1)
        }if (this.state.hpvTest == 'negativo' && (this.state.age == '31 a 55' || this.state.age == '56 a 80' || this.state.age == 'mais 80' )){
            this.addScore('nulo')

        }if (this.state.hpvVaccine == 'nunca'){
            this.addScore(1)
        }if (this.state.hpvVaccine == 'menos 5' && this.state.age == '0 a 20'){
            this.addScore('nulo')
        }
    }

    recomendations(){
        if (this.state.age == "0 a 20" && this.state.firstSexual == 'menos 20'){
            this.addRecomendation("Realize exames de prevenção");
        }if (this.state.fruits == "nenhuma" || this.state.fruits == "menos 2"){
            this.addRecomendation('Aumente a ingestão de vitaminas na dieta');
        }if (this.state.smoker == 'sim'){
            this.addRecomendation('Reduza o consumo de cigarros');
        }if (this.state.condon == 'não' || this.state.condon == 'nunca'){
            this.addRecomendation('Use camisinha nas relações');
        }if (this.state.colposc == "atipica" ){
            this.addRecomendation('Pesquise sobre lesão no colo uterino')
        }if (this.state.hpvVaccine == 'nunca'){
            this.addRecomendation('A vacina contra HPV é segura e eficaz, procure seu ginecologista')
        }if (this.state.hpvVaccine == 'mais 5'){
            this.addRecomendation('Atualize sua vacina contra HPV')
    }}
 
    postFirebase(){
        let exame = {
            parterns: this.state.parterns,
            condon: this.state.condon,
            hpvTest: this.state.hpvTest,
            citoOnco: this.state.citoOnco,
            colposc: this.state.colposc,
            hpvVaccine: this.state.hpvVaccine,
            //pageFourValue: this.state.pageFourValue,
            date: this.state.date,

            age: this.state.age,
            firstSexual: this.state.firstSexual,
            gesta: this.state.gesta,
            para: this.state.para,
            abort: this.state.abort,
            //pageOneValue: this.state.pageOneValue,

            fruits: this.state.fruits,
            city: this.state.city,
            infectDesease: this.state.infectDesease,
            smoker: this.state.smoker,
            //pageTwoValue: this.state.pageTwoValue,

            MotherCancer: this.state.MotherCancer,
            FatherCancer: this.state.FatherCancer,
            HASorDM: this.state.HASorDM,
            cort: this.state.cort,
            //pageThreeValue: this.state.pageThreeValue,
        }
        let dbRef = database().ref('exames')

        dbRef.push({
            exame
        }) 
    }

    finish = () => {
        if (this.validationToPass() != true) {

        }else {
            this.recomendations()
            this.calculatePage()
            this.props.navigation.navigate('Result', {
            pageOneValue: this.state.pageOneValue,
            pageTwoValue: this.state.pageTwoValue,
            pageThreeValue: this.state.pageThreeValue,
            pageFourValue: this.state.pageFourValue,
            recomendations: this.state.recomendations,
            //result: this.state.result
            })
            this.postFirebase()
        }
        
    }

    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); 
        var month = new Date().getMonth() + 1; 
        var year = new Date().getFullYear();
        that.setState({
          date:
            date + '/' + month + '/' + year,
        });
        this.props.navigation.setParams( { finish: this.finish } )
      } 

    render(){    
        return (
            <ScrollView>
                <SafeAreaView style = {styles.Container}>
                    <View style = {styles.QuestionsBox}>
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
                            <Text style = {styles.Text}>Você já fez o papanicolau? Qual o resultado?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({citoOnco: "não fiz"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>não fiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({citoOnco: "baixo grau"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>lesão baixo grau</Text>
                            </TouchableOpacity>
                            </View>    
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({citoOnco: "indeterminada"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>indeterminada</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({citoOnco: "negativo"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>negativo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({citoOnco: "alto grau"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>lesão alto grau</Text>
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
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({colposc: "atipica"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>atípica</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({colposc: "normal"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>Normal</Text>
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
                            <Text style = {styles.Text}>Você já tomou a vacina contra HPV?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({hpvVaccine: "nunca"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>nunca</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({hpvVaccine: "mais 5"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>mais 5</Text>
                            </TouchableOpacity>
                        </View>
                        <View  style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.BigButton} onPress = {() => this.setState({hpvVaccine: "menos 5"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>menos 5</Text>
                            </TouchableOpacity>
                        </View>
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


