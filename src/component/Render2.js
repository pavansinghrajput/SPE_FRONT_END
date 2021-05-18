import {useParams} from "react-router-dom";
import Cards1 from "./Cards1";
import React from "react";
import {Component} from "react";
import axios from "axios";

 function RenderMenu(props)
{
    console.log(props.dishes);
    return (
        <div>
            <div>
                <h1>Dishes</h1>
              <div className="d-flex justify-content-between flex-wrap">
                  {props.dishes?.map(dish => {
                      return <Cards1 dish={dish}/>
                  }) }
              </div>


            </div>
        </div>
    )
}

class Render2 extends Component{
  constructor(props) {
      super(props);
      this.state = {
          dishes : this.props.location.dishes
      }
     
      this.setDishes = this.setDishes.bind(this);
      console.log("constructor");
  }
  
    setDishes(dishes)
    {
        this.setState({dishes:dishes})
    }

   
    render() {


        return(
            <div>
                <RenderMenu
                        dishes={this.state.dishes}/>

            </div>
        )
    }
}
export default Render2;
