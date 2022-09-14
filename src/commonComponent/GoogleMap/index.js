import React from "react";
const { compose, withProps, withHandlers } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");

const MyMapComponent = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown && (
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
    </GoogleMap>
);


class ContactMap extends React.PureComponent {
    render() {
        return (
            <div
                className="map"
                style={{
                    width: '100%',
                    position: "relative",
                    height: "545px"
                }}
            >
                <MyMapComponent />
            </div>
        )
    }
}

export default ContactMap;
