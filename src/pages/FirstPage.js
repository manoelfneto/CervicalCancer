import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Button, Alert } from 'react-native';

export default class FirstPage extends Component{

    static navigationOptions = ({ navigation }) => {    
        let headerStyle = {backgroundColor: '#0099FF' };
        let headerTintColor= '#FFFFFF';
        let headerRight = (
            <TouchableOpacity onPress = { navigation.getParam('pass')}  style = {styles.buttonHeader}>
                <Text style = {{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Proximo</Text>
            </TouchableOpacity>
        )
        return { headerStyle, headerRight, headerTintColor} 
    }

    constructor(props) {
        super(props)
        this.state = {
            age: '',
            firstSexual: '',
            gesta: '',
            para: '',
            abort: '',
            pageOneValue: [],

        }
    }

    addScore(score){
        var arr = this.state.pageOneValue;
        arr.push(score);
        this.setState({pageOneValue: arr});
    }

    validationToPass(){
        if(this.state.age == '' || this.state.firstSexual == '' || this.state.gesta == '' || this.state.abort == '' || this.state.para == ""){
            Alert.alert("Você esqueceu de responder alguma pergunta")
        }else{
            return true
        }
    }

    calculatePageValue(){
        let value = 0;
        
        if (this.state.age == "0 a 20"){
            this.addScore(0)
        }if (this.state.age == "21 a 30"){
            this.addScore(1)
        }if (this.state.age == "31 a 55"){
            this.addScore(3)
        }if (this.state.age == '56 a 80'){
            this.addScore(2)
        }if (this.state.age == 'mais 80'){
            this.addScore(0)

        }if (this.state.firstSexual == 'mais 20'){
            this.addScore(0)
        }if (this.state.firstSexual == 'menos 20'){
            this.addScore(1)
        }if (this.state.firstSexual == 'não tive'){
            this.addScore("nulo")

        }if (this.state.gesta == '0 a 2'){
            this.addScore(0)
        }if (this.state.gesta == '3 a 5'){
            this.addScore(1)
        }if(this.state.gesta == '6 a 8'){
            this.addScore(2)
        }if(this.state.gesta == "mais 9"){
            this.addScore(3)
            
        }if (this.state.para == '0 a 2'){
            this.addScore(0)
        }if (this.state.para == '3 a 5'){
            this.addScore(1)
        }if(this.state.para == '6 a 8'){
            this.addScore(2)
        }if(this.state.para == "mais 9"){
            this.addScore(3)

        }if (this.state.abort == '0 a 2'){
            this.addScore(0)
        }if (this.state.abort == '3 a 5'){
            this.addScore(1)
        }if(this.state.abort == '6 a 8'){
            this.addScore(2)
        }if(this.state.abort == "mais 9"){
            this.addScore(3)
        }
    }

    pass = () => {
        if (this.validationToPass() != true){

        }else{
            this.calculatePageValue()
            this.props.navigation.navigate('SecondPage', {  
            age: this.state.age,
            firstSexual: this.state.firstSexual,
            gesta: this.state.gesta,
            para: this.state.para,
            abort: this.state.abort,
            pageOneValue: this.state.pageOneValue,

        })

        }
        }

    componentDidMount() {
        this.props.navigation.setParams( { pass: this.pass } )

    }

    render(){
        return (
            <ScrollView>
                <SafeAreaView style = {styles.Container}>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style= {styles.Text}>Qual a sua idade?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.age == "0 a 20" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({age: "0 a 20"})}>
                                <Text style = {this.state.age == "0 a 20" ? styles.ButtonTextClicked: styles.ButtonText}>0 a 20</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.age == "21 a 30" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({age: "21 a 30"})}>
                                <Text style = {this.state.age == "21 a 30" ? styles.ButtonTextClicked: styles.ButtonText}>21 a 30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.age == "31 a 55" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({age: "31 a 55"})}>
                                <Text style = {this.state.age == "31 a 55" ? styles.ButtonTextClicked: styles.ButtonText}>31 a 55</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.age == "56 a 80" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({age: "56 a 80"})}>
                                <Text style = {this.state.age == "56 a 80" ? styles.ButtonTextClicked: styles.ButtonText}>56 a 80</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.age == "mais 80" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({age: "mais 80"})}>
                                <Text style = {this.state.age == "mais 80" ? styles.ButtonTextClicked: styles.ButtonText}>mais 80</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Com quantos anos você teve sua primeira Relação Sexual?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.firstSexual == "menos 20" ? styles.ButtonAdaptiveClicked: styles.ButtonAdaptive} onPress = {() => this.setState({firstSexual: "menos 20"})}>
                                <Text style = {this.state.firstSexual == "menos 20" ? styles.ButtonTextClicked: styles.ButtonText}>menos 20</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.firstSexual == "mais 20" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({firstSexual: "mais 20"})}>
                                <Text style = {this.state.firstSexual == "mais 20" ? styles.ButtonTextClicked: styles.ButtonText}>mais 20</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.firstSexual == "não tive" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({firstSexual: "não tive"})}>
                                <Text style = {this.state.firstSexual == "não tive" ? styles.ButtonTextClicked: styles.ButtonText}>não tive</Text>
                            </TouchableOpacity>
                            </View>
                    </View>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Quantas gestações você teve?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.gesta == "0 a 2" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({gesta: "0 a 2"})} underlayColor="white">
                                <Text style = {this.state.gesta == "0 a 2" ? styles.ButtonTextClicked: styles.ButtonText}>0 a 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.gesta == "3 a 5" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({gesta: "3 a 5"})} underlayColor="white">
                                <Text style = {this.state.gesta == "3 a 5" ? styles.ButtonTextClicked: styles.ButtonText}>3 a 5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.gesta == "6 a 8" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({gesta: "6 a 8"})} underlayColor="white">
                                <Text style = {this.state.gesta == "6 a 8" ? styles.ButtonTextClicked: styles.ButtonText}>6 a 8</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.gesta == "mais 9" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({gesta: "mais 9"})} underlayColor="white">
                                <Text style = {this.state.gesta == "mais 9" ? styles.ButtonTextClicked: styles.ButtonText}>mais 9</Text>
                            </TouchableOpacity>
            
                        </View>   
                    </View>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Quantos partos você teve?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.para == "0 a 2" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({para: "0 a 2"})} underlayColor="white">
                                <Text style = {this.state.para == "0 a 2" ? styles.ButtonTextClicked: styles.ButtonText}>0 a 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.para == "3 a 5" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({para: "3 a 5"})} underlayColor="white">
                                <Text style = {this.state.para == "3 a 5" ? styles.ButtonTextClicked: styles.ButtonText}>3 a 5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.para == "6 a 8" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({para: "6 a 8"})} underlayColor="white">
                                <Text style = {this.state.para == "6 a 8" ? styles.ButtonTextClicked: styles.ButtonText}>6 a 8</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.para == "mais 9" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({para: "mais 9"})} underlayColor="white">
                                <Text style = {this.state.para == "mais 9" ? styles.ButtonTextClicked: styles.ButtonText}>mais 9</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Quantos abortos você teve?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.abort == "0 a 2" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({abort: "0 a 2"})} underlayColor="white">
                                <Text style = {this.state.abort == "0 a 2" ? styles.ButtonTextClicked: styles.ButtonText}>0 a 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.abort == "3 a 5" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({abort: "3 a 5"})} underlayColor="white">
                                <Text style = {this.state.abort == "3 a 5" ? styles.ButtonTextClicked: styles.ButtonText}>3 a 5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.abort == "6 a 8" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({abort: "6 a 8"})} underlayColor="white">
                                <Text style = {this.state.abort == "6 a 8" ? styles.ButtonTextClicked: styles.ButtonText}>6 a 8</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.abort == "mais 9" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({abort: "mais 9"})} underlayColor="white">
                                <Text style = {this.state.abort == "mais 9" ? styles.ButtonTextClicked: styles.ButtonText}>mais 9</Text>
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
    },

    Container: {
        flex: 1,
        backgroundColor: 'white'
    },

    QuestionsBox: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 32      
    },

    QuestionsText:{
        alignItems: 'center',
        justifyContent: 'center',
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
        borderColor: "#0099FF",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 96,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },

    ButtonClicked: {
        borderColor: "#FFAA00",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 96,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    },

    ButtonAdaptive: {
        borderColor: "#0099FF",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 110,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    },

    ButtonAdaptiveClicked: {
        borderColor: "#FFAA00",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 110,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    },

    ButtonText:{
        color: '#0099FF',
        fontSize: 20,
    },

    ButtonTextClicked:{
        color: '#FFAA00',
        fontSize: 20,
    }
})


