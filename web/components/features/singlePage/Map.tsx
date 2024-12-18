import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
export const PlaceMap = () => {
  return (
    <APIProvider apiKey={"AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek"}>
      {/* 47.91886435753692, 106.91756731548396 */}
      <div className="w-full h-full">
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: 47.91886435753692, lng: 106.91756731548396 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
          mapId="85f71dc247c7d76c"
        ></Map>
      </div>
    </APIProvider>
  );
};
