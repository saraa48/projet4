import React, { Component } from "react";
import axios from "axios"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";



class Update extends Component {
  state = {
    modal: false,
    _id:this.props.restaurant._id,
    name:this.props.restaurant.name,
    address:this.props.restaurant.address,
    specialite:this.props.restaurant.specialite,
    img:this.props.restaurant.img
    
  };
  
  modifyRestaurant = modifRest =>
  axios.put(`/ProjectRest/restaurant/${modifRest._id}`, {
    name: modifRest.name,
    address: modifRest.address,
    specialite: modifRest.specialite,
    img:modifRest.img
  }).then(this.props.getRestaurant());

  toggle = () => this.setState({ modal: !this.state.modal });

  HandleChange = e => {
    this.setState({
      
        [e.target.id]: e.target.value
      
    });
  };
  render() {
    

  //  const {restaurant}=this.props
    return (
      <div>
        <button
          class="btn btn-outline-warning"
          color="success"
          onClick={this.toggle}
        >
          modifier
        </button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Change your Restaurant</ModalHeader>
          <ModalBody>
              <span>image</span>
            <Input
              //   placeholder="enter your title"
              defaultValue={this.state.img}
              type="text"
              id="img"
              onChange={this.HandleChange}  
            />
             <span>Name</span>
             <Input
              //   placeholder="enter your title"
              defaultValue={this.state.name}
              type="text"
              id="name"
              onChange={this.HandleChange}  
            /> <span>Address</span>
            <Input
              //   placeholder="enter your title"
              defaultValue={this.state.address}
              type="text"
              id="address"
              onChange={this.HandleChange}
            /> <span>Specialité</span>
            <Input
              //   placeholder="enter your title"
              defaultValue={this.state.specialite}
              type="text"
              id="specialite"
              onChange={this.HandleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.modifyRestaurant(this.state);

                this.toggle();
              }}
            >
              Save change
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default Update;
