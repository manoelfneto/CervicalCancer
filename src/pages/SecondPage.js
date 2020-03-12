import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class SecondPage extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerStyle = {backgroundColor: '#FFAA00' };
        let headerTintColor= '#FFFFFF';
        let headerRight = (
            <TouchableOpacity onPress = { () => navigation.navigate('ThirdPage')} style = {styles.buttonHeader}>
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
            pageTwoValue: 0,

            age: this.props.navigation.getParam('age', 'no_age'),  
            firstSexual: this.props.navigation.getParam('firstSexual', 'no_sexual'),
            gesta: this.props.navigation.getParam('gesta', 'no_gesta'),
            para: this.props.navigation.getParam('para', 'no_para'),
            abort: this.props.navigation.getParam('abort', "no_abort"),
            pageOneValue: this.props.navigation.getParam('pageOneValue', "no_value")
        }
    }

    _VerifyQuestions(){
        navigation.navigate('ThirdPage')
    };

    _AddInfect(desease){
        var arr = this.state.infectDesease;
        arr.push(desease);
        this.setState({infectDesease: arr})
    }

    _CalculatePage(){
        if (this.state.fruits == "nenhuma"){
            this.setState({pageTwoValue: this.state.pageTwoValue += 2})
        }else if (this.state.fruits == "mais 2"){
            this.setState({pageTwoValue: this.state.pageTwoValue += 0})
        }else if (this.state.fruits == "menos 2"){
            this.setState({pageTwoValue: this.state.pageTwoValue += 1})


        }else if (this.state.smoker == 'sim' ){
            this.setState({pageTwoValue: this.state.pageTwoValue += 2})
        }else if (this.state.smoker == "não"){
            this.setState({pageTwoValue: this.state.pageTwoValue += 1})
        }else if (this.state.smoker == "nunca"){
            this.setState({pageTwoValue: this.state.pageTwoValue += 0})
        }


    }
   
    _Pass = () => {
        this.props.navigation.navigate('ThirdPage', {  
            fruits: this.state.fruits,
            city: this.state.city,
            infectDesease: this.state.infectDesease,
            smoker: this.state.smoker,
            pageTwoValue: this.state.pageTwoValue,

            age: this.state.age,
            firstSexual: this.state.firstSexual,
            gesta: this.state.gesta,
            para: this.state.para,
            abort: this.state.abort,
            pageOneValue: this.state.pageOneValue

        })
    }
    render(){ 
        const { navigation } = this.props;  	
        const pageOneValue = navigation.getParam('pageOneValue', 'no_value');  

        return (  
            
            <ScrollView>
                
                <SafeAreaView style = {styles.Container}> 
                    <View style = {styles.QuestionsBox}>
                    <Text>pageOneValue: {JSON.stringify(pageOneValue)}</Text> 
                        <View style = {styles.QuestionsText}>
                            <Text style= {styles.Text}>Quantas porções de frutas e verduras você ingere por semana?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({fruits: "nenuhuma"})}  underlayColor="black">
                                <Text style = {styles.ButtonText}>nenhuma</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({fruits: "mais 2"})}  underlayColor="white">
                                <Text style = {styles.ButtonText}>mais 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({fruits: "menos 2"})}  underlayColor="white">
                                <Text style = {styles.ButtonText}>menos 2</Text>
                            </TouchableOpacity>
                            </View>
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Em qual cidade voce mora?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                        <GooglePlacesAutocomplete
                            placeholder='Search'
                            minLength={2} // minimum length of text to search
                            autoFocus={false}
                            fetchDetails={true}
                            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                              console.log(data);
                              console.log(details);
                            }}
                            getDefaultValue={() => {
                              return ''; // text input default value
                            }}
                            query={{
                              // available options: https://developers.google.com/places/web-service/autocomplete
                              key: 'AIzaSyDL4oFbx4ZknoVAZFj8Wj0htUgs_QgfbQA',
                              language: 'en', // language of the results
                              types: '(cities)', // default: 'geocode'
                            }}
                            styles={{
                              description: {
                                fontWeight: 'bold',
                              },
                              predefinedPlacesDescription: {
                                color: '#1faadb',
                              },
                            }}
                    
                           
                            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                            GoogleReverseGeocodingQuery={{
                              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                            }}
                            GooglePlacesSearchQuery={{
                              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                              rankby: 'distance',
                              types: 'food',
                            }}
                            GooglePlacesDetailsQuery={{
                                // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                                fields: 'formatted_address',
                            }}
                    
                            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    
                    
                            predefinedPlacesAlwaysVisible={true}
                             />
                            
                            
                        </View>
            
                    </View>

                    

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você tem alguma dessas doenças?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this._AddInfect('aids')} underlayColor="white">
                                <Text style = {styles.ButtonText}>AIDS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this._AddInfect('hepatite')} underlayColor="white">
                                <Text style = {styles.ButtonText}>hepatite</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this._AddInfect('sifilis')} underlayColor="white">
                                <Text style = {styles.ButtonText}>siflis</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this._AddInfect('gonorreia')} underlayColor="white">
                                <Text style = {styles.ButtonText}>gonorreia</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this._AddInfect('nenhuma')} underlayColor="white">
                                <Text style = {styles.ButtonText}>nenhuma</Text>
                            </TouchableOpacity>

                        </View>   
                    </View>

                    <View style = {styles.QuestionsBox}>
                        <View style = {styles.QuestionsText}>
                            <Text style = {styles.Text}>Você fuma?</Text>
                        </View>
                        <View style = {styles.ButtonsBox}>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({smoker: 'sim'})} underlayColor="white">
                                <Text style = {styles.ButtonText}>sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({smoker: 'não'})} underlayColor="white">
                                <Text style = {styles.ButtonText}>não</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.Button} onPress = {() => this.setState({smoker: 'nunca'})} underlayColor="white">
                                <Text style = {styles.ButtonText}>nunca</Text>
                            </TouchableOpacity>
                            </View>
                    </View>

                    
                    <View>
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

    ButtonText:{
        color: '#FFAA00',
        fontSize: 20,
    },

    TextInput: {
        borderColor: 'gray',
        borderWidth: 2,
        height: 32,
        width: 328,
        borderRadius: 40,
        fontSize: 10
    }
    

})


