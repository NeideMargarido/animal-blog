import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Apimaps extends React.Component{




    render(){
        return(
            <Map  google={this.props.google}
            initialCenter={{
            lat: 0.00,
            lng: 6.52
        }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'}/>
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>

        )
    }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyAO-_H99mKHcGUxtxNXnoC6cjWMOPSYDls")
})(Apimaps);