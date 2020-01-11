import React, { Component } from "react";
import CardRestaurant from "./CardRestaurant";
import "./CardStyle.css";
import axios from "axios";
import Navebar from "../navbar/Navebar";
import Footer from "../footer/Footer";
import Caroussel from "../slider/Caroussel";
import Partener from "../partner/Partener ";
class ListRestaurant extends Component {
  state = {
    OurRest: [],
    userInput: ""
  };
  componentDidMount = () => {
    this.getRestaurant();
  };

  getRestaurant = () => {
    axios.get("/ProjectRest/restaurant/").then(res =>
      this.setState({
        OurRest: res.data
      })
    );
  };
  deleteRestaurant = id => {
    axios.delete(`/ProjectRest/restaurant/${id}`).then(this.getRestaurant);
  };
  changeName = input => {
    this.setState({ ...this.state, userInput: input });
    console.log(this.state.userInput);
  };

  render() {
    return (
      <div>
        <Navebar changeName={this.changeName} />
        <Caroussel /> 
         <Partener />
        <div className="liste-restaurants">
          {this.state.userInput
            ? this.state.OurRest.filter(el =>
                el.name
                  .toLowerCase()
                  .includes(this.state.userInput.toLowerCase().trim())
              ).map((el,key)=><CardRestaurant
                key={key}
                restaurant={el}
                getRestaurant={this.getRestaurant}
                deleteRestaurant={this.deleteRestaurant}
              />)
            : this.state.OurRest.map((el, key) => (
                <CardRestaurant
                  key={key}
                  restaurant={el}
                  getRestaurant={this.getRestaurant}
                  deleteRestaurant={this.deleteRestaurant}
                />
                // this.state.userInput
                //   ? this.state.Mytab.filter(
                //       el =>

                //         el.name
                //           .toLowerCase()
                //           .includes(this.state.userInput.toLowerCase())
                //     )
                //   : this.state.Mytab.filter(el=>el.rating>=this.state.rating)
              ))}
          
        </div>
        <Footer />
      </div>
    );
  }
}
export default ListRestaurant;
