import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';

export default class ThirdPage extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerStyle = {backgroundColor: '#32CD32' };
        let headerTintColor= '#FFFFFF';
        let headerRight = (
            <TouchableOpacity onPress = { () => navigation.navigate('FourthPage')} style = {styles.buttonHeader}>
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
            pageThreeValue: 0,

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

    _CalculatePage(){
        this.setState({pageValue: pageValue + this.state.cancerFamily.length})
        this.setState({pageValue: pageValue + this.state.kindOfCancer.length})
        this.setState({pageValue: pageValue + this.state.HASorDM.length})

        
        
    }

    AddMotherCancer(cancer){
        var arr = this.state.MotherCancer;
        arr.push(cancer);
        this.setState({MotherCancer: arr})
    }

    AddFatherCancer(cancer){
        var arr = this.state.FatherCancer;
        arr.push(cancer);
        this.setState({FatherCancer: arr});
    }
    
    AddHasOrDm(desease){
        var arr = this.state.HASorDM;
        arr.push(desease);
        this.setState({HASorDM: arr});
    }

    _Pass = () => {
        this.props.navigation.navigate('FourthPage', {  
            MotherCancer: this.state.MotherCancer,
            FatherCancer: this.state.FatherCancer,
            HASorDM: this.state.HASorDM,
            cort: this.state.cort,
            pageThreeValue: this.state.pageTwoValue,

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

        })}



    render(){
       
        return (
            <ScrollView>
                <SafeAreaView style = {styles.Container}>
                   
                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style= {styles.Text}>Sua mãe já teve algum tipo de cancer?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddMotherCancer('mama')}  underlayColor="black">
                                <Text style = {styles.ButtonText}>mama</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddMotherCancer('tireoide')}  underlayColor="white">
                                <Text style = {styles.ButtonText}>tireoide</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddMotherCancer('intestino')}  underlayColor="white">
                                <Text style = {styles.ButtonText}>intestino</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddMotherCancer('utero')}  underlayColor="white">
                                <Text style = {styles.ButtonText}>utero</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddMotherCancer('nenhum')} underlayColor="white">
                                <Text style = {styles.ButtonText}>nenhum</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style= {styles.Text}>Seu pai já teve algum tipo de cancer?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddFatherCancer('mama')}  underlayColor="black">
                                <Text style = {styles.ButtonText}>mama</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddFatherCancer('tireoide')}  underlayColor="white">
                                <Text style = {styles.ButtonText}>tireoide</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddFatherCancer('intestino')}  underlayColor="white">
                                <Text style = {styles.ButtonText}>intestino</Text>
                            </TouchableOpacity>
                            </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddFatherCancer('utero')}  underlayColor="white">
                                <Text style = {styles.ButtonText}>utero</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddFatherCancer('nenhum')} underlayColor="white">
                                <Text style = {styles.ButtonText}>nenhum</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você tem Hipertensão ou Diabetes?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddHasOrDm('hipert')} underlayColor="white">
                                <Text style = {styles.ButtonText}>hipert</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddHasOrDm('diabetes')} underlayColor="white">
                                <Text style = {styles.ButtonText}>diabetes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.AddHasOrDm('nenhuma')} underlayColor="white">
                                <Text style = {styles.ButtonText}>nenhuma</Text>
                            </TouchableOpacity>
                            </View>  
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você faz uso de corticoide?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({cort: "sim"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({cort: "não"})} underlayColor="white">
                                <Text style = {styles.ButtonText}>não</Text>
                            </TouchableOpacity>
                        </View> 
                        <TouchableOpacity onPress={this._Pass} style={styles.Button}>
                            <Text>
                                passar
                            </Text>
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

    },

    ButtonText:{
        color: '#32CD32',
        fontSize: 20,
    }
    

})


