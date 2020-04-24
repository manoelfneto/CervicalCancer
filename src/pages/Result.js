import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Button, FlatList, List, ListItem } from 'react-native';


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
            pageOneValue: this.props.navigation.getParam('pageOneValue', 'no_valueOne'),
            pageTwoValue: this.props.navigation.getParam('pageTwoValue', 'no_valueTwo'),
            pageThreeValue: this.props.navigation.getParam('pageThreeValue', 'no_valueThree'),
            pageFourValue: this.props.navigation.getParam('pageFourValue', 'no_valueFour'),
            recomendations: this.props.navigation.getParam('recomendations', "no_recomendation"),

            result: this.props.navigation.getParam('result', "none")
        }
    }

    calculateScore(){ 
        
        if (this.state.pageOneValue.includes("nulo") || this.state.pageFourValue.includes("nulo")){
            this.setState({result: 0})
        }else{
            const totalOne = this.state.pageOneValue.reduce((a, b) => a + b);
            const totalTwo = this.state.pageTwoValue.reduce((a, b) => a + b);
            const totalThree = this.state.pageThreeValue.reduce((a, b) => a + b);
            const totalFour = this.state.pageFourValue.reduce((a, b) => a + b);
        
        this.setState({result: totalOne + totalTwo + totalThree + totalFour })} 
    }

    componentDidMount() {
        this.calculateScore()
    }
    
    render(){
        const { navigation } = this.props;  
        const recomendations = navigation.getParam('recomendations', 'recomendations'); 

        return (
            <SafeAreaView style = {styles.Container}>       
                <View style = {styles.Result}>
                    {this.state.result < 11 ? 
                        <Text style = {styles.ResultText}>
                            Muito baixo
                        </Text>: null }

                    {this.state.result >= 11 && this.state.result <=20 ? 
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
                        de você desenvolver cancer de colo uterino é muito baixa. 
                        </Text>: null }
                    
                        {this.state.result >= 11 && this.state.result <=20 ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo uterino é baixa.
                        </Text>: null }
                        
                        {this.state.result > 20 && this.state.result <=29  ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é moderada. Se atente as recomendações.
                        </Text>: null }

                        {this.state.result > 30 && this.state.result <=52 ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é alta. Se atente as recomendações.
                        </Text>: null }

                        {this.state.result > 52 ? 
                        <Text style = {styles.informationText}>
                        Isso signica que, atualmente, baseado no seu estilo de vida e nas suas respostas, a chance
                        de você desenvolver cancer de colo é muito alta. Se atente as recomendações.
                        </Text>: null }                 
                </View>

                <View style = {styles.informations}>
                    {this.state.recomendations.lenght != 0 ?     
                    <FlatList
                    data = {recomendations}
                    keyExtractor={item => item.key}
                    renderItem={({item}) => <Text style = {styles.Recomend}>{item}</Text>}
                    >
                    </FlatList>: null }
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
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green'
    },

    informations: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 0,
    },

    informationText: {
        fontSize: 16,
        marginTop:20,
        marginBottom: 10,
        textAlign: 'justify'
    },

    Recomend: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify'
    },


    Text: {
        fontSize: 24,
        textAlign: 'center'
    },

    ButtonBox: {
        marginTop: 30,
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


