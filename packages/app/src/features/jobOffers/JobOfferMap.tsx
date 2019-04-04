import { Address } from "@api";
import { Box, Icon } from "@components/elements";
import { Text } from "@components/elements/Text";
import { MapViewProps } from "@components/map";
import dynamic from "next/dynamic";
import { Fragment } from "react";
// https://github.com/zeit/next.js/issues/4515
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33163
const MapView = dynamic<MapViewProps>((() => import("@components/map/MapView")) as any, { ssr: false });

export const JobOfferMap = (props: { address: Address }) => {
  return (
    <Fragment>
      <Box pb={3} fontSize={2} color="grey.1">
        <Icon mapMarker></Icon><Text pl={3}>{props.address.address}</Text>
      </Box>
      <MapView lat={props.address.geoCode.lat} lng={props.address.geoCode.lng} markerLabel={props.address.city} zoom={9}></MapView>
    </Fragment>
  )
}
