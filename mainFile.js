import React from 'react';
import AppNavigator from './src/routes';

export default class mainFile extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            age: '',
            firstSexual: '',
            gesta: '',
            para: '',

            fruits: '',
            city: '',
            infectDesease: '',
            smoker: '',

            cancerFamily: '',
            kindOfCancer: '',
            HASorDM: '',
            cort: '',

            parterns: '',
            condon: '',
            hpvTest: '',
            citoOnco: '',
            colposc: '',
            hpvVaccine: '',

        }
    }

    render() {
        return(
            <AppNavigator
            screenProps={{
                age: this.state.age,
                firstSexual: this.state.firstSexual,
                gesta: this.state.gesta,
                para: this.state.para,
                
                fruits: this.state.fruits,
                city: this.state.city,
                infectDesease: this.state.infectDesease,
                smoker: this.state.smoker,

                cancerFamily: this.state.cancerFamily,
                kindOfCancer: this.state.kindOfCancer,
                HASorDM: this.state.HASorDM,
                cort: this.state.cort,

                parterns: this.state.parterns,
                condon: this.state.condon,
                hpvTest: this.state.hpvTest,
                citoOnco: this.state.citoOnco,
                colposc: this.state.colposc,
                hpvVaccine: this.state.hpvVaccine
            }}
            />
        )
    }
}