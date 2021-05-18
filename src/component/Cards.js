import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from "react-router";
import axios from "axios";


class Cards extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId:'',
            dishes:[]
        }
        this.Handler = this.Handler.bind(this);


    }


    Handler(event){
        event.preventDefault();
         axios.get('http://localhost:8082/api/menu/' + this.props.vendor[0])
            .then(response => {
                console.log({ menu: response.data});
                this.setState(({dishes: response.data}));
                this.props.history.push({
                    pathname: "/Render2",
                    dishes: this.state.dishes
                })
            })
            .catch(error => {
                console.log(error)
            })
            
       
    }
    render(){

        return(
            <div>
            <div className="Card" >
            <Card border="success" style={{ width: '18rem' }} >
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title><h1>{this.props.vendor?.[2]}</h1></Card.Title>
                    <Card.Text>
                        <h4>{this.props.vendor?.[3]}</h4>
                        {this.props.vendor?.[1]}
                        <br/>
                        <br/>
                        <button onClick={this.Handler}>Select</button>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
                <br/>

            </div>
        )
    }
}
export default withRouter(Cards);
