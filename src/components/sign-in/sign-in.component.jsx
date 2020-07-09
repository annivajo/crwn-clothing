import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in with your pwd</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        label="email"
                        value={this.state.email}
                        //required
                        handleChange={this.handleChange}/>
                    <FormInput
                        name="password"
                        label="password"
                        value={this.state.password}
                        //required
                        handleChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;