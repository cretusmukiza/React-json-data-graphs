import React,{Component} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
class Home extends  Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            error:"",
            displayError:true,
            status:true

        }
    }
    render(){
        return(
            <div className="home">
            <div className="form">
                <h2>login into your account</h2>
                <form  >
                    <input type="text" name="username" placeholder="Email address"  />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="log in" />
                    <div className="errors" style={{
                        display:`${this.state.displayError?"flex":"none"}`
                    }}  >
                        Password is wrong
                    </div>
                    <div className="status" style={{
                        display:`${this.state.status?"flex":"none"}`}}>
                    
                    </div>
                </form>
                
                <div className="form-footer">
                    <p>Need an account? <Link to="">Signup</Link></p>
                </div>
            </div>
            
            </div>

        )
    }
}
export default Home;