import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const GOOGLE_MAPS_APIKEY = "YOUR_API_KEY";

export default function MapScreen() {
  const bins = [
    {
      id: 1,
      latitude: 35.5047,
      longitude: 11.0622,
    },
    {
      id: 2,
      latitude: 35.507,
      longitude: 11.06,
    },
    {
      id: 3,
      latitude: 35.5,
      longitude: 11.065,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.5047,
          longitude: 11.0622,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {bins.map((bin) => (
          <Marker
            key={bin.id}
            coordinate={{
              latitude: bin.latitude,
              longitude: bin.longitude,
            }}
            title={`Bin ${bin.id}`}
          />
        ))}

        <MapViewDirections
          origin={{
            latitude: bins[0].latitude,
            longitude: bins[0].longitude,
          }}
          destination={{
            latitude: bins[2].latitude,
            longitude: bins[2].longitude,
          }}
          waypoints={[
            {
              latitude: bins[1].latitude,
              longitude: bins[1].longitude,
            },
          ]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
