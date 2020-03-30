import React,{Component} from 'react'
import FormComponent from './FormComponent'

class TravelForm extends Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:"",
            age:"",
            gender:"",
            destination:"",
            Chicken:false,
            Mutton:false,
            Fish:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.display=this.display.bind(this)
    }
    handleChange(event){
        const {name,value,type,checked}=event.target
        type==="checkbox"?this.setState({[name]:checked}):this.setState({[name]:value})
    }
    display(){
        var out = '';
        for (var p in this.state) {
            out += p + ': ' + this.state[p] + '\n';
        }
        alert(out);
    }
    render(){
        return(
            <FormComponent handleChange={this.handleChange} content={this.state} display={this.display}/>
        )
    }
}

export default TravelForm