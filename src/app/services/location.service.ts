import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from '@awesome-cordova-plugins/native-geocoder';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };

  constructor() {}

  async getCurrentLocation() {
    const locationData: Position = await Geolocation.getCurrentPosition();
    console.log(locationData);
    this.decodeLocation(
      locationData.coords.latitude,
      locationData.coords.longitude
    );
  }

  private async decodeLocation(latitude: number, longitude: number) {
    await NativeGeocoder.reverseGeocode(latitude, longitude, this.options)
      .then((result: NativeGeocoderResult[]) => console.log(result[0]))
      .catch((error: any) => console.log(error));
  }
}
