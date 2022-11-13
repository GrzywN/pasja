import React, { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api"

type MapProps = { className: string };

function Map({ className }: MapProps) {

  const center = useMemo(() => ({ lat: 50.599180, lng: 19.165490 }), []);

  return (
    <GoogleMap
      zoom={11}
      center={center}
      mapContainerClassName={className}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default Map;
