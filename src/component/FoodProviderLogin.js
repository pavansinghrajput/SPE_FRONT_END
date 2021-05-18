import Form from 'react-bootstrap/Form';
import React ,{Component} from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {Link} from "react-router-dom";
class FoodProviderLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            emailId: "",
            password: ""
        }
        this.EmailHandler=this.EmailHandler.bind(this)
        this.PasswordHandler=this.PasswordHandler.bind(this)
        this.handleClick= this.handleClick.bind(this)
    }

    EmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    PasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    handleClick= (event) =>{
        event.preventDefault();
        let foodProvider = {
            emailId: this.state.emailId,
            password: this.state.password
        }
        axios.post('http://localhost:8082/api/foodprovider/login',foodProvider)
            .then(response =>{
                console.log(response);
                console.log(response.data);
               //  {//this.props.history.push( {pathName:'/FoodProviderPage',
               // // dishId : response.data[0]});
               //     // console.log("login");
               //
               //  }
                this.props.history.push("/FoodProviderPage")
            })
            .catch(error =>{
                console.log(error)
            })


        //alert('login');
    }
    render(){
        return(
            <div>
            <Form>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.emailId}
                                      onChange={this.EmailHandler} />
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password}
                                      onChange={this.PasswordHandler} />
                    </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleClick}>
                    Login
                </Button>
                <Link to="/FoodProviderRegister">
                    <Button className="ml-5" variant="primary" >
                       Sign Up
                    </Button>
                </Link>
            </Form>
            </div>
        )
    }

}
export default FoodProviderLogin;
