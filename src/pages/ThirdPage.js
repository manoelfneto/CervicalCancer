import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Alert, StatusBar } from 'react-native';

export default class ThirdPage extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerStyle = {backgroundColor: '#32CD32' };
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
            MotherCancer: [],
            FatherCancer: [],
            HASorDM: [],
            cort: '',
            pageThreeValue: [],

            fruits: this.props.navigation.getParam('fruits', 'no_fruits'),
            city: this.props.navigation.getParam('city', 'no_city'),
            infectDesease: this.props.navigation.getParam('infectDesease', 'no_infectDs'),
            smoker: this.props.navigation.getParam('smoker', 'no_smoker'),
            pageTwoValue: this.props.navigation.getParam('pageTwoValue', 'no_valueTwo'),

            age: this.props.navigation.getParam('age', 'no_age'),  
            firstSexual: this.props.navigation.getParam('firstSexual', 'no_sexual'),
            gesta: this.props.navigation.getParam('gesta', 'no_gesta'),
            para: this.props.navigation.getParam('para', 'no_para'),
            abort: this.props.navigation.getParam('abort', "no_abort"),
            pageOneValue: this.props.navigation.getParam('pageOneValue', 'no_valueOne')
        }
    };

    addScore(score){
        var arr = this.state.pageThreeValue;
        arr.push(score);
        this.setState({pageThreeValue: arr});
    }

    validationToPass(){
        if(this.state.MotherCancer == [] || this.state.FatherCancer == [] || this.state.HASorDM == [] || this.state.cort == ''){
            Alert.alert("você esqueceu de responder alguma pergunta")
        }else{
            return true
        }
    }

    calculatePage(){
        if (this.state.MotherCancer.includes("nenhum")){
            this.addScore(0)
        }if (this.state.MotherCancer.includes('mama')){
            this.addScore(1)
        } if (this.state.MotherCancer.includes('tireoide')){
            this.addScore(1)
        }if (this.state.MotherCancer.includes('intestino')){
            this.addScore(1)
        }if (this.state.MotherCancer.includes('utero')){
            this.addScore(1)
        
        }if (this.state.MotherCancer.includes('nenhum')){
                this.addScore(1)
        }if (this.state.FatherCancer.includes('tireoide')){
            this.addScore(1)
        }if (this.state.MotherCancer.includes('mama')){
            this.addScore(1)
        }if (this.state.MotherCancer.includes('intestino')){
            this.addScore(1)
        
        }if (this.state.HASorDM.includes("nenhum")){
            this.addScore(1)
        }if (this.state.HASorDM.includes("diabetes")){
            this.addScore(1)
        }if (this.state.HASorDM.includes("hipert")){
            this.addScore(1)

        }if (this.state.cort == "sim"){
            this.addScore(1)
        }if (this.state.cort == "nao"){
            this.addScore(0)
        }       
    }

    addMotherCancer(cancer){
        var arr = this.state.MotherCancer;
        arr.push(cancer);

        if (this.state.MotherCancer.find(n => n == "nenhum")){
            var a = this.state.MotherCancer.indexOf("nenhum")
            arr.splice(a,1)

        } 
        this.setState({MotherCancer: arr})
    }

    addFatherCancer(cancer){
        var arr = this.state.FatherCancer;
        arr.push(cancer);

        if (this.state.FatherCancer.find(n => n == "nenhum")){
            var a = this.state.FatherCancer.indexOf("nenhum")
            arr.splice(a,1)
        }

        this.setState({FatherCancer: arr});
    }
    
    addHasOrDm(desease){
        var arr = this.state.HASorDM;
        arr.push(desease);

        if (this.state.HASorDM.find(n => n == "nenhum")){
            var a = this.state.HASorDM.indexOf("nenhum")
            arr.splice(a,1)
        }

        this.setState({HASorDM: arr});
    }

    pass = () => {
        if (this.validationToPass() != true){

        }else{
            this.calculatePage()
            this.props.navigation.navigate('FourthPage', {  
            MotherCancer: this.state.MotherCancer,
            FatherCancer: this.state.FatherCancer,
            HASorDM: this.state.HASorDM,
            cort: this.state.cort,
            pageThreeValue: this.state.pageThreeValue,

            age: this.state.age,
            firstSexual: this.state.firstSexual,
            gesta: this.state.gesta,
            para: this.state.para,
            abort: this.state.abort,
            pageOneValue: this.state.pageOneValue,

            fruits: this.state.fruits,
            city: this.state.city,
            infectDesease: this.state.infectDesease,
            smoker: this.state.smoker,
            pageTwoValue: this.state.pageTwoValue
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
                        backgroundColor = "#32CD32"
                        hidden = {false}
                    />
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style= {styles.Text}>Sua mãe já teve algum tipo de cancer?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.MotherCancer.find(m => m == 'mama') ? styles.ButtonClicked: styles.Button} onPress = {() => this.addMotherCancer('mama')}>
                                <Text style = {this.state.MotherCancer.find(m => m == 'mama') ? styles.ButtonTextClicked: styles.ButtonText}>mama</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.MotherCancer.find(m => m == 'tireoide') ? styles.ButtonClicked: styles.Button} onPress = {() => this.addMotherCancer('tireoide')}>
                                <Text style = {this.state.MotherCancer.find(m => m == 'tireoide') ? styles.ButtonTextClicked: styles.ButtonText}>tireoide</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.MotherCancer.find(m => m == 'intestino') ? styles.ButtonClicked: styles.Button} onPress = {() => this.addMotherCancer('intestino')}>
                                <Text style = {this.state.MotherCancer.find(m => m == 'intestino') ? styles.ButtonTextClicked: styles.ButtonText}>intestino</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.MotherCancer.find(m => m == 'utero') ? styles.ButtonClicked: styles.Button} onPress = {() => this.addMotherCancer('utero')}>
                                <Text style = {this.state.MotherCancer.find(m => m == 'utero') ? styles.ButtonTextClicked: styles.ButtonText}>utero</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.MotherCancer.find(m => m == 'nenhum') ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({MotherCancer: ['nenhum']})}>
                                <Text style = {this.state.MotherCancer.find(m => m == 'nenhum') ? styles.ButtonTextClicked: styles.ButtonText}>nenhum</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style= {styles.Text}>Seu pai já teve algum tipo de cancer?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.FatherCancer.find(m => m == 'mama') ? styles.ButtonClicked: styles.Button} onPress = {() => this.addFatherCancer('mama')}>
                                <Text style = {this.state.FatherCancer.find(m => m == 'mama') ? styles.ButtonTextClicked: styles.ButtonText}>mama</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.FatherCancer.find(m => m == 'tireoide') ? styles.ButtonClicked: styles.Button} onPress = {() => this.addFatherCancer('tireoide')}>
                                <Text style = {this.state.FatherCancer.find(m => m == 'tireoide') ? styles.ButtonTextClicked: styles.ButtonText}>tireoide</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.FatherCancer.find(m => m == 'intestino') ? styles.ButtonClicked: styles.Button} onPress = {() => this.addFatherCancer('intestino')}>
                                <Text style = {this.state.FatherCancer.find(m => m == 'intestino') ? styles.ButtonTextClicked: styles.ButtonText}>intestino</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.FatherCancer.find(m => m == 'nenhum') ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({FatherCancer: ['nenhum']})}>
                                <Text style = {this.state.FatherCancer.find(m => m == 'nenhum') ? styles.ButtonTextClicked: styles.ButtonText}>nenhum</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você tem Hipertensão ou Diabetes?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.HASorDM.find(h => h == "hipert") ? styles.ButtonClicked: styles.Button} onPress = {() => this.addHasOrDm('hipert')}>
                                <Text style = {this.state.HASorDM.find(h => h == "hipert") ? styles.ButtonTextClicked: styles.ButtonText}>hipert.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.HASorDM.find(h => h == "diabetes") ? styles.ButtonClicked: styles.Button} onPress = {() => this.addHasOrDm('diabetes')}>
                                <Text style = {this.state.HASorDM.find(h => h == "diabetes") ? styles.ButtonTextClicked: styles.ButtonText}>diabetes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.HASorDM.find(h => h == "nenhum") ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({HASorDM: ['nenhum']})}>
                                <Text style = {this.state.HASorDM.find(h => h == "nenhum") ? styles.ButtonTextClicked: styles.ButtonText}>nenhum</Text>
                            </TouchableOpacity>
                            </View>  
                    </View>
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você faz uso de corticoide?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {this.state.cort == 'sim' ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({cort: "sim"})}>
                                <Text style = {this.state.cort == 'sim' ? styles.ButtonTextClicked: styles.ButtonText}>sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {this.state.cort == 'não' ? styles.ButtonClicked: styles.Button} onPress = {() => this.setState({cort: "não"})}>
                                <Text style = {this.state.cort == 'não' ? styles.ButtonTextClicked: styles.ButtonText}>não</Text>
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

    ButtonClicked: {
        borderColor: "#4B0082",
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

    ButtonText:{
        color: '#32CD32',
        fontSize: 20,
    },

    ButtonTextClicked:{
        color: '#4B0082',
        fontSize: 20,
    }
})


