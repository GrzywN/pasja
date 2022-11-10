import React, { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api"

type MapProps = { className: string };

function Map({ className }: MapProps) {

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName={className}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
