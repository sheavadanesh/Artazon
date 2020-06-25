import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(user => this.props.history.push('/'));
    };

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = { email: 'bobross@br.com', password: '123456' };        
        this.props.processForm(demoUser).then(() => this.props.history.push('/'));
    };

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <span key={`error-${i}`}>
                        <br className='err-spacer'></br>
                        {error}
                    </span>
                ))}
            </div>
        );
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.props.dispatchedClearErrors();
    }

    render() {
        if (this.props.formType === 'signup') {
            return (
                <div className='signup'>
                    <form onSubmit={this.handleSubmit}>
                    <br className='heading-spacer' id='create-spacer'></br>
                        <div className='outer-container-create'>
                            <div className='sign-in-container' id='create-account'>
                                <h1 className='subheading'>Create account</h1>
                                <br></br>
                                <label className='form-input-title'>Your name
                                <br></br>
                                    <input
                                        className='input-box'
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update('name')}
                                    />
                                </label>
                                <br></br>
                                <br></br>
                                <label className='form-input-title'>Email
                                <br></br>
                                    <input
                                        className='input-box'
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                    />
                                </label>
                                <br></br>
                                <br></br>
                                <label className='form-input-title'>Password
                                <br></br>
                                    <input
                                        className='input-box'
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </label>
                                <br></br>
                                <div className='auth-error'>
                                    {this.renderErrors()}
                                </div>
                                <br></br>
                                <input className='submit-button' id='yellow' type="submit" value="Create your Artazon account" />
                                <br></br>
                                <br></br>
                                <br></br>
                                <span className='alt-link' id='agree-to-cond-create'>By creating an account, you agree to Artazon's Conditions of Use and Privacy Notice.</span>
                                <br></br>
                                <br></br>
                                <span className='alt-link' id='already-have-account'>Already have an account? {this.props.navLink}</span>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else if (this.props.formType === 'login') {
            return (
                <div className='sign-in'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='sign-in-logo'>
                            <br className='heading-spacer'></br>
                        </div>
                        <div className='outer-container'>
                            <div className='sign-in-container' id='actual-sign-in'>
                                <h1 className='subheading'>Sign-In</h1>
                                <br></br>
                                <label className='form-input-title'>Email
                                <br></br>
                                    <input
                                        className='input-box'
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                    />
                                </label>
                                <br></br>
                                <br></br>
                                <label className='form-input-title'>Password
                                <br></br>
                                    <input
                                        className='input-box'
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </label>
                                <br></br>
                                <div className='auth-error'>
                                    {this.renderErrors()}
                                </div>
                                <br></br>
                                <input className='submit-button' id='yellow' type="submit" value="Sign-In" />
                                <br></br>
                                <br></br>
                                <br></br>
                                <span class='agree-to-cond'>By continuing, you agree to Artazon's Conditions of Use and Privacy Notice.</span>
                            </div>
                            <br></br>
                            <br></br>
                            <div className='bottom-container'>
                                <span className='alt-link' id='line-break'>------------------------------------------------------------------------------------------------------------------</span>
                                <span className='alt-link' id='new-to-artazon'>New to Artazon?</span>
                                <span className='alt-link' id='line-break'>------------------------------------------------------------------------------------------------------------------</span>
                                <br></br>
                                <br></br>
                                <Link to='/signup'>
                                    <input className='submit-button' id='gray' type="submit" value="Create your Artazon account"/>
                                </Link>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </form>
                    <div className='parent-demo'>
                        <span id='demo-signin'>Or, try our {<span id='demo-signin-link' onClick= { this.handleDemoLogin }>demo user login</span>} instead.</span>
                    </div>
                </div>
            );
        }
    }
};

export default SessionForm;