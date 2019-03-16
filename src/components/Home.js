import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Text, ImageBackground, ActivityIndicator, StatusBar } from "react-native";
import SearchInput from "../templates/SearchInput";
import getImageForWeather from "../utils/getImageForWeather";
import { fetchLocationId, fetchWeather } from "../actions/getWeatherData";

export default class Home extends Component {
    state = {
        location: "",
        loading: false,
        error: false,
        temperature: 0,
        weather: ""
    }
    componentDidMount() {
        this.handleChangeLocation("Nairobi");
    }

    handleChangeLocation = city => {
        if (!city) { return; }
        this.setState({ loading: true }, async () => {
            try {
                const locationId = await fetchLocationId(city); //fetch the location id according to the city entered
                //now next is use the id to get weather information on that location
                const { location, weather, temperature } = await fetchWeather(locationId);
                //now if data comes successfully, we set state again
                this.setState({
                    loading: false,
                    error: false,
                    location: location,
                    weather: weather,
                    temperature: temperature
                });
            } catch (error) {
                this.setState({
                    loading: false,
                    error: true
                });
            }
        });
    }




    render() {
        const { container, textStyle, largeText, smallText } = styles;
        const { location, loading, error, weather, temperature } = this.state;
        //when passing an array of styles, the styles at the end of the array take precedence over earlier styles

        return (
            <KeyboardAvoidingView style={container}  >
                <StatusBar barStyle="light-content" />
                <ImageBackground
                    source={getImageForWeather(weather)}
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                >
                    <View style={styles.detailsContainer}  >
                        <ActivityIndicator animating={loading} color="white" size="large" />
                        {!loading && (
                            <View>
                                {error && (
                                    <Text style={[smallText, textStyle]} >
                                        Could not load weather, please try a different city
                                    </Text>
                                )}
                                {!error && (
                                    <View>
                                        <Text style={[largeText, textStyle]}>{location}</Text>
                                        <Text style={[smallText, textStyle]}>{weather}</Text>
                                        <Text style={[largeText, textStyle]}>{`${Math.round(temperature)}°`}</Text>
                                    </View>
                                )}
                                <SearchInput placeholder="Search any city" onSubmit={this.handleChangeLocation} />

                            </View>
                        )}


                    </View>


                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        color: '#fff'
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
    }



})