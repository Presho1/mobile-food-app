import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function SearchBar({ cityHandler}) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{key: "AIzaSyCYvIEzyxPkVPqBW7RxKWdKefjwzzM26OQ"}}
        onPress={(data, details = null) => {
            console.log(data.description);
            const city = data.description.split(',')[0];
            cityHandler(city);
        }}      
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              color="black"
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
