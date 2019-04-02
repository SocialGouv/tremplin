import { LatLngExpression } from "leaflet";
import { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { MapViewProps } from "./MapViewProps";

export default class MapView extends Component<MapViewProps> {

  public render() {
    const position: LatLngExpression = [this.props.lat, this.props.lng]
    return (
      <Map center={position} zoom={this.props.zoom} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {this.props.markerLabel}
          </Popup>
        </Marker>
      </Map>
    )
  }
}



