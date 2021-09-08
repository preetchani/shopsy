import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        };

    }
    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({[name]:value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }


    render(){
        return(
            <div className="sign-in">
                <div className="heading-text">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                </div>
              <form onSubmit={this.handleSubmit}>
                <FormInput 
                  name='email'
                  type='email'
                  label='Email'
                  value={this.state.email}
                  handleChange={this.handleChange}
                  required
                />
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                />
                <CustomButton type ='submit'>Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle}>{' '}Sign in with Google{' '}</CustomButton>
              </form>
            </div>
        );
    }

}
export default SignIn;