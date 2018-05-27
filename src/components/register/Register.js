import React from 'react';

/*
class Register extends React.Component {
  
    constructor(props){
        super(props) // the only purpose to pass props to the constructor is to use inside of constructor is to assing in any variable like this.onRouteChange = this.props
        this.state = {
           registerName: '',
           registerEmail: '',
           registerPass:''
       }
    }
    
     onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({registerPass: event.target.value})
    }
    
    onSubmitSignIn = () => {
        fetch('http://localhost:3001/register', {
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify ({
                        name: name,
                        email: email,
                        password: pass
                    })
                }).then((response) => response.json())
                  .then((data) =>  loadUser(data))
        
                    onRouteChange('home');
     
    }
    
   
    render() {
        //there's no difference if I pass or not to the the constructor...the props can be used outside constructor for both situation.
         const {onRouteChange} = this.props
         
         return (
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 tc center">
                    <main className="pa4 black-80">
                        <form className="measure center"/>

                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0"/>   
                        <legend className="f3 fw6 ph0 mh0">Register</legend>

                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange}/>
                        </div>

                         <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                        </div>

                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="password" name="password"  id="pass" onChange={this.onPasswordChange}/>
                        </div>

                        <div>
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="register" onClick={this.onSubmitSignIn}/>
                        </div>

                    </main>
            </article>
        </div>
             
    );
  }
}
*/

const Register = ({onRouteChange, loadUser}) => {
    
const validateField = (email, pass, name) => {
    if (email && pass && name) {
        var re = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
        if (re.test(email)) {
            return true
        } else {
            alert('Bad email address: ' + email);
            return false
        }
    } else {
        alert('Fields can not be empty ');
        return false
    }
}
    
    const onSubmitSignIn_2_Option = () => {
        const name = document.getElementById("name").value
        const email = document.getElementById("email-address").value
        const pass = document.getElementById("pass").value

        const isValid = validateField(email, pass, name)

        if (isValid) {
            fetch('http://localhost:3001/register', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: pass
                    })
                }).then((response) => response.json())
                .then((user) => loadUser(user))

            onRouteChange('home');
        }
    }
    
    
    return (
        <div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 tc center " >
                <main className="pa4 black-80">
                    <form className="measure center"/>
                    
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0"/>   
                    <legend className="f3 fw6 ph0 mh0">Register</legend>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="text" name="name"  id="name"/>

                    </div>

                     <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    
                    
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="password" name="password"  id="pass"/>
                    </div>

                    <div>
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="register" onClick={onSubmitSignIn_2_Option}/>
                    </div>
                 
                </main>
        </article>
    </div>
             
    );
}







export default Register;