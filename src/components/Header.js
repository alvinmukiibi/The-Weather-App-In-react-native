//show a nice rectangle on top with some text in it

//import libraries
import React from 'react';
import { Text, View } from "react-native";

//make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles; //destructure in the styles and use props below to apply them

    return (
        <View style={viewStyle}>
            <Text style={textStyle} >
                {props.headerName}
            </Text>
        </View>

    );
}

//styles object
const styles = {
    textStyle: {
        fontSize: 20,
        color: "#fff"
    },
    viewStyle: {
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"
    }
}

//export the component
export default Header;