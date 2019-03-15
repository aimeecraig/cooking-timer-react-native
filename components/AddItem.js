import React, { Component } from 'react';
import { View, Text, Form } from 'react-native';

export class AddItem extends Component {
    componentDidMount(){
        this.itemNameInput.focus();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(event)) {
            this.props.addItem(event)
            event.target.itemName.value = "";
            event.target.cookingTime.value = "";
            event.target.itemName.focus();
        }
    }

    validateForm = (event) => {
        if (event.target.itemName.value === "") {
            alert("Item cannot be left blank.")
            return false;
        }
        if (event.target.cookingTime.value === "") {
            alert("Cooking time cannot be left blank.")
            return false;
        }
        if (parseInt(event.target.cookingTime.value) < 0) {
            alert("Cooking time cannot be a negative number.")
            return false;
        }
        return true;
    }

    render() {
        return (
            <View>
                <form id="form" onSubmit={this.handleSubmit}>
                    <View className="form-group">
                        <Input id="itemName" type="text" className="form-control" placeholder="Item" ref={(input) => { this.itemNameInput = input; }} />
                    </View>
                    <View className="form-group">
                        <Input id="cookingTime" type="number" className="form-control" placeholder="Cooking Time in Minutes" />
                    </View>
                    <View className="form-group">
                        <Button type="submit" className="btn btn-warning">Submit</Button>
                    </View>
                </form>
            </View>
        )
  }
}

export default AddItem
