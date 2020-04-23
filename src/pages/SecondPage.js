import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, TextInput, Alert } from 'react-native';
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
        if(this.state.fruits == '' || this.state.infectDesease == [] || this.state.smoker == ''){
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
            pageTwoValue: this.state.pageTwoValue,

            age: this.state.age,
            firstSexual: this.state.firstSexual,
            gesta: this.state.gesta,
            para: this.state.para,
            abort: this.state.abort,
            pageOneValue: this.state.pageOneValue
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
                                <Text style = {styles.Text}>Em qual cidade você mora?</Text>
                            </View>
                            <View style = {styles.ButtonsBox}>
                            <GooglePlacesAutocomplete
                                placeholder='Search'
                                minLength={2} // minimum length of text to search
                                autoFocus={false}
                                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                                keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                                listViewDisplayed='auto'    // true/false/undefined
                                fetchDetails={true}
                                renderDescription={row => row.description} // custom description render
                                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                    console.log(data, details);
                                }}
                            
                                getDefaultValue={() => ''}
                            
                                query={{
                                    // available options: https://developers.google.com/places/web-service/autocomplete
                                    key: 'AIzaSyBbN0d4d6rAPK6oOPNtVrL4wMFRAsaQwAw',
                                    language: 'en', // language of the results
                                    types: '(cities)' // default: 'geocode'
                                }}
                            
                                styles={{
                                    textInputContainer: {
                                    width: '100%'
                                    },
                                    description: {
                                    fontWeight: 'bold'
                                    },
                                    predefinedPlacesDescription: {
                                    color: '#1faadb'
                                    }
                                }}
                            
                                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                                currentLocationLabel="Current location"
                                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                                GoogleReverseGeocodingQuery={{
                                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                                }}
                                GooglePlacesSearchQuery={{
                                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                                    rankby: 'distance',
                                    type: 'cafe'
                                }}
                                
                                GooglePlacesDetailsQuery={{
                                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                                    fields: 'formatted_address',
                                }}
                            
                                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                                //predefinedPlaces={[homePlace, workPlace]}
                            
                                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                                />
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
    }
})




