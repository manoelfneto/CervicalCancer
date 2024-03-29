import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Alert, StatusBar, Picker} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class SecondPage extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerStyle = {backgroundColor: '#FFAA00' };
        let headerTintColor= '#FFFFFF';
        let headerRight = (
            <TouchableOpacity onPress = { navigation.getParam('pass') } style = {styles.buttonHeader}>
                <Text style = {{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Proximo</Text>
            </TouchableOpacity>
        )
        return { headerStyle, headerRight, headerTintColor} 
    }

    constructor(props) {
        super(props)
        this.state = {
            fruits: '',
            city: '',
            infectDesease: [],
            smoker: '',
            pageTwoValue: [],

            age: this.props.navigation.getParam('age', 'no_age'),  
            firstSexual: this.props.navigation.getParam('firstSexual', 'no_sexual'),
            gesta: this.props.navigation.getParam('gesta', 'no_gesta'),
            para: this.props.navigation.getParam('para', 'no_para'),
            abort: this.props.navigation.getParam('abort', "no_abort"),
            pageOneValue: this.props.navigation.getParam('pageOneValue', "no_value"),
            null: this.props.navigation.getParam("null", 'none')
        }
    }


    validationToPass(){
        if (this.state.fruits == '' || this.state.infectDesease == [] || this.state.smoker == '' || this.state.city == ""){
            Alert.alert("você esqueceu de responder alguma pergunta")
        }else{
            return true
        }
    }

    addScore(score){
        var arr = this.state.pageTwoValue;
        arr.push(score);
        this.setState({pageTwoValue: arr});
    }

    addInfect(desease){
        var arr = this.state.infectDesease;
        arr.push(desease);
        
        if (this.state.infectDesease.find(n => n == "nenhuma")){
            var a = this.state.infectDesease.indexOf("nenhuma")
            arr.splice(a,1)
        }

        this.setState({infectDesease: arr})
    }

    calculatePage(){
        if (this.state.fruits == "nenhuma"){
            this.addScore(2)
        } if (this.state.fruits == "mais 2"){
            this.addScore(0)
        } if (this.state.fruits == "menos 2"){
            this.addScore(1)


        } if (this.state.smoker == 'sim' ){
            this.addScore(2)
        } if (this.state.smoker == "não"){
            this.addScore(1)
        } if (this.state.smoker == "nunca"){
            this.addScore(0)

        } if (this.state.infectDesease.includes("nenhum")){
            this.addScore(0)
        }if  (this.state.infectDesease.includes("aids")) {
            this.addScore(3)
        }if (this.state.infectDesease.includes("hepatite")){
            this.addScore(2)
        } if (this.state.infectDesease.includes("gonorreia")) {
            this.addScore(2)
        }if (this.state.infectDesease.includes("sifilis")){
            this.addScore(3)
        }
        this.addScore(1) // pais brasil
    }
   
    pass = () => {
        if (this.validationToPass() != true){

        }else {
            this.calculatePage()
            this.props.navigation.navigate('ThirdPage', {  
            fruits: this.state.fruits,
            city: this.state.city,
            infectDesease: this.state.infectDesease,
            smoker: this.state.smoker,
            city: this.state.city,
            pageTwoValue: this.state.pageTwoValue,

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
                        <StatusBar
                            barStyle = "light-content"
                            backgroundColor = "#FFAA00"
                            hidden = {false}
                        />
                        <View style = {styles.QuestionsBox}>
                            <View style = {styles.QuestionsText}>
                                <Text style= {styles.Text}>Quantas porções de frutas e verduras você ingere por semana?</Text>
                            </View>
                            <View style = {styles.ButtonsBox}>
                                <TouchableOpacity style = {this.state.fruits == "nenhuma" ? styles.ButtonAdaptiveClicked: styles.ButtonAdaptive} onPress = {() => this.setState({fruits: "nenhuma"})}>
                                    <Text style = {this.state.fruits == "nenhuma" ? styles.ButtonTextAdptiveClicked: styles.ButtonTextAdptive}>nenhuma</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {this.state.fruits == "mais 2" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({fruits: "mais 2"})}>
                                    <Text style = {this.state.fruits == "mais 2" ? styles.ButtonTextClicked: styles.ButtonText}>mais 2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {this.state.fruits == "menos 2" ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({fruits: "menos 2"})}>
                                    <Text style = {this.state.fruits == "menos 2" ? styles.ButtonTextClicked: styles.ButtonText}>menos 2</Text>
                                </TouchableOpacity>
                                </View>
                        </View>
                        <View style = {styles.QuestionsBox}>
                            <View style = {styles.QuestionsText}>
                                <Text style = {styles.Text}>De onde você é?</Text>
                            </View>
                        <View style = {styles.pickerStyle}>   
                            <Picker
                            style = {styles.picker}
                            selectedValue = {this.state.city}
                            onValueChange = {
                                (itemValor, itemIndex) => 
                                this.setState({ city: itemValor })}
                            >
                                <Picker.Item label="Escolha o estado" value="" />
                                <Picker.Item label="Acre" value="AC" />
                                <Picker.Item label="Alagoas" value="AL" />
                                <Picker.Item label="Amapá" value="AP" />
                                <Picker.Item label="Amazonas" value="AM" />
                                <Picker.Item label="Bahia" value="BA" />
                                <Picker.Item label="Ceará" value="CE" />
                                <Picker.Item label="Distrito Federal" value="DF" />
                                <Picker.Item label="Espirito Santo" value="ES" />
                                <Picker.Item label="Goias" value="GO" />
                                <Picker.Item label="Maranhão" value="MA" />
                                <Picker.Item label="Mato Grosso" value="MT" />
                                <Picker.Item label="Mato Grosso do Sul" value="MS" />
                                <Picker.Item label="Minas Gerais" value="MG" />
                                <Picker.Item label="Pará" value="PA" />
                                <Picker.Item label="Paraíba" value="PB" />
                                <Picker.Item label="Paraná" value="PR" />
                                <Picker.Item label="Pernambuco" value="PE" />
                                <Picker.Item label="Piauí" value="PI" />
                                <Picker.Item label="Rio de Janeiro" value="RJ" />
                                <Picker.Item label="Rio Grande do Norte" value="RN" />
                                <Picker.Item label="Rio Grande do Sul" value="RS" />
                                <Picker.Item label="Rondônia" value="RO" />
                                <Picker.Item label="Roraima" value="RR" />
                                <Picker.Item label="Santa Catarina" value="SC" />
                                <Picker.Item label="São Paulo" value="São Paulo" />
                                <Picker.Item label="Sergipe" value="SE" />
                                <Picker.Item label="Tocantins" value="TO" />
                            </Picker>
                        </View>
                        </View>
                        <View style = {styles.QuestionsBox}>
                            <View style = {styles.QuestionsText}>
                                <Text style = {styles.Text}>Você tem alguma dessas doenças?</Text>
                            </View>
                            <View style = {styles.ButtonsBox}>
                                <TouchableOpacity style = {this.state.infectDesease.find(a => a == "aids") ? styles.ButtonClicked: styles.Button} onPress = {() => this.addInfect('aids')}>
                                    <Text style = {this.state.infectDesease.find(a => a == "aids") ? styles.ButtonTextClicked: styles.ButtonText}>AIDS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {this.state.infectDesease.find(h => h == "hepatite") ? styles.ButtonAdaptiveClicked: styles.ButtonAdaptive} onPress = {() => this.addInfect('hepatite')}>
                                    <Text style = {this.state.infectDesease.find(h => h == "hepatite") ? styles.ButtonTextAdptiveClicked: styles.ButtonTextAdptive}>hepatite B</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {this.state.infectDesease.find(s => s == "sifilis") ? styles.ButtonClicked: styles.Button} onPress = {() => this.addInfect('sifilis')}>
                                    <Text style = {this.state.infectDesease.find(a => a == "sifilis") ? styles.ButtonTextClicked: styles.ButtonText}>siflis</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.ButtonsBox}>
                                <TouchableOpacity style = {this.state.infectDesease.find(g => g == "gonorreia") ? styles.ButtonAdaptiveClicked: styles.ButtonAdaptive} onPress = {() => this.addInfect('gonorreia')}>
                                    <Text style = {this.state.infectDesease.find(g => g == "gonorreia") ? styles.ButtonTextAdptiveClicked: styles.ButtonTextAdptive}>gonorreia</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {this.state.infectDesease.find(g => g == "nenhuma") ? styles.ButtonAdaptiveClicked: styles.ButtonAdaptive} onPress = {() => this.setState({infectDesease: ['nenhuma']})}>
                                    <Text style = {this.state.infectDesease.find(g => g == "nenhuma") ? styles.ButtonTextAdptiveClicked: styles.ButtonTextAdptive}>nenhuma</Text>
                                </TouchableOpacity>

                            </View>   
                        </View>
                        <View style = {styles.QuestionsBox}>
                            <View style = {styles.QuestionsText}>
                                <Text style = {styles.Text}>Você fuma?</Text>
                            </View>
                            <View style = {styles.ButtonsBox}>
                                <TouchableOpacity style = {this.state.smoker == 'sim' ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({smoker: 'sim'})}>
                                    <Text style = {this.state.smoker == 'sim' ? styles.ButtonTextClicked: styles.ButtonText}>sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {this.state.smoker == 'não' ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({smoker: 'não'})}>
                                    <Text style = {this.state.smoker == 'não' ? styles.ButtonTextClicked: styles.ButtonText}>não</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {this.state.smoker == 'nunca' ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({smoker: 'nunca'})}>
                                    <Text style = {this.state.smoker == 'nunca' ? styles.ButtonTextClicked: styles.ButtonText}>nunca</Text>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
        flex: 1,
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
        borderColor: "#FFAA00",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 96,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 8, // Android
    },

    ButtonClicked: {
        borderColor: "#32CD32",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 96,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 8, // Android
    },

    ButtonAdaptive: {
        borderColor: "#FFAA00",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 'auto',
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 8, // Android

    },

    ButtonAdaptiveClicked: {
        borderColor: "#32CD32",
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: 'white',
        width: 'auto',
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 8, // Android

    },

    ButtonText:{
        color: '#FFAA00',
        fontSize: 20,
    },

    ButtonTextClicked:{
        color: '#32CD32',
        fontSize: 20,
    },

    ButtonTextAdptive: {
        color: '#FFAA00',
        fontSize: 20,
        marginLeft:8,
        marginRight: 8
    },

    ButtonTextAdptiveClicked: {
        color: '#32CD32',
        fontSize: 20,
        marginLeft:8,
        marginRight: 8

    },

    TextInput: {
        borderColor: 'gray',
        borderWidth: 2,
        height: 32,
        width: 328,
        borderRadius: 40,
        fontSize: 10
    },

    pickerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    picker: {
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
})




