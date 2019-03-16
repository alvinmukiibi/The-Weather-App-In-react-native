import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
export default class SearchInput extends Component {

    state = {
        newLocation: ""
    }
    handleChangeText = newLocation => {
        this.setState({ newLocation: newLocation }); //when invoked this triggers a re-rendering of the component
    }
    handleSubmitEditing = () => {
        const { newLocation } = this.state;
        //if the user has not typed anything into the text input
        if (!newLocation) {
            return;
        }

        this.props.onSubmit(newLocation);
        /*pass the new value of the location to the parent component via props
        Note that this directly invokes the function specified as an argument for this prop from the parent component
        so when it (handleChangeLocation) is invoked, it is passed the new location as an argument
        */

        //reset the value of the input to nothing
        this.setState({ newLocation: "" });

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    style={styles.textInput}
                    clearButtonMode="always"
                    value={this.state.newLocation}
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textInput: {
        flex: 1,
        color: 'white',
    },
});

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}