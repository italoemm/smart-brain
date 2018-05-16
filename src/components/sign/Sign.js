import React from 'react';


class Sign extends React.Component {
   
    constructor(props){
        super(props) // the only purpose to pass props to the constructor is to use inside of constructor
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
                        <input className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" type="password" name="password"  id="password"/>
                    </div>

                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={()=> onRouteChange('home')}/>
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

export default Sign;