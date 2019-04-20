import React, { Component } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import CityPin from "./CityPin";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoidGFkaW4iLCJhIjoiY2pzeXd4amFoMGE3cTQzcGY3amp6cWRpciJ9.ZPdbM8sY0RNVFmH8yBSBVw";

const myPosition = {
  latitude: 50.28609,
  longitude: 18.68002
};

class Map extends Component {
  state = {
    viewport: {
      latitude: myPosition.latitude,
      longitude: myPosition.longitude,
      zoom: 5,
      // bearing: 0,
      pitch: 0,
      // width: 600,
      // height: 500
    },
    popupInfo: {
      latitude: myPosition.latitude,
      longitude: myPosition.longitude
    }
  };

  renderPopup() {
    return (
      this.state.popupInfo && (
        <Popup
          tipSize={7}
          anchor="bottom-right"
          longitude={this.state.popupInfo.longitude}
          latitude={this.state.popupInfo.latitude}
          offsetTop={-32}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <p>Tutaj mieszkam :)</p>
        </Popup>
      )
    );
  }

  render() {
    return (
      <div className="map">
        <MapGL
          {...this.state.viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/tadin/cjt02zb2m00u01foesexpxjza"
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.renderPopup()}
          <Marker latitude={myPosition.latitude} longitude={myPosition.longitude}>
            <CityPin
              size={30}
              onClick={() =>
                this.state.popupInfo === null
                  ? this.setState({ popupInfo: myPosition })
                  : this.setState({ popupInfo: null })
              }
            />
          </Marker>
        </MapGL>
      </div>
    );
  }
}

export default Map;
