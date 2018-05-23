import React from 'react';


/*
class Sign extends React.Component {
  
    constructor(props){
        super(props) // the only purpose to pass props to the constructor is to use inside of constructor to assing in any variable like this.onRouteChange = this.props
        this.state = {
           signInEmail: '',
           signInPassword:''
       }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    
    onSubmitSignIn = () => {
        console.log(this.state)
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify ({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(response => console.log(response))
      // this.props.onRouteChange('home')   
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
                    <legend className="f3 fw6 ph0 mh0">Sign In</legend>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange = {this.onEmailChange}/>
                               
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                type="password" 
                                name="pass"  
                                id="pass"
                                onChange = {this.onPasswordChange}/>
                    </div>

                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="signIn" 
                                onClick= {this.onSubmitSignIn}/>
                    </div>
                    
                    
                    <div className="lh-copy mt3">
                          <p onClick={()=> onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                </main>
        </article>
    </div>
             
    );
}
}
*/


//I can replace all this stuff above to only this function below
const Sign = ({onRouteChange, loadUser}) => {

       const onSubmitSignIn_2_Option = () => {
                const email = document.getElementById("email-address").value
                const pass = document.getElementById("pass").value

                fetch('http://localhost:3001/signin', {
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify ({
                        email: email,
                        password: pass
                    })
                }).then((response) => response.json())
                  .then((data) =>  loadUser(data))

                onRouteChange('home')     
    }
             
    return (
        <div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 tc center" >
                <main className="pa4 black-80">
                    <form className="measure center"/>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0"/>   
                    <legend className="f3 fw6 ph0 mh0">Sign In</legend>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="email" name="email-address"  id="email-address" />
                               
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                type="password" name="pass"  id="pass" />
                    </div>

                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="signIn" 
                                onClick= {onSubmitSignIn_2_Option}
                                    />
                    </div>
                    
                    
                    <div className="lh-copy mt3">
                          <p onClick={()=> onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                </main>
        </article>
    </div>
             
    );
}
export default Sign;



