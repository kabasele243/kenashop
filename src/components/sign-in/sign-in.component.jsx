import React from 'react';
import FormInput from '../form-input/form-input.component'
import './signin.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle, signInWithEmailAndPassword } from '../../firebase/firebase.utils'



class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password); this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Sign In</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email}
                        handleChange={this.handleChange} type="email" label='email' required />

                    <FormInput name='password' value={this.state.password}
                        handleChange={this.handleChange} type="password" label='password' required />

                    <CustomButton type='submit'>Sign In</CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>

                </form>



            </div>
        )
    }
}

export default SignIn;