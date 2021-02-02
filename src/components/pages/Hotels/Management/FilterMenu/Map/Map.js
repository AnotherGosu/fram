import { Container } from "./styled";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectHotelsOnMap } from "redux/slices/hotels";
import markerImg from "images/map-marker.svg";

import { YMaps, Map as YMap, Placemark, Clusterer } from "react-yandex-maps";

const Map = () => {
  const hotelsOnMap = useSelector((state) => selectHotelsOnMap(state));
  const history = useHistory();

  useEffect(() => {
    window.handleMapRoute = function (id) {
      history.push(`hotels/${id}`);
    };
  }, [history]);

  return (
    <Container>
      <YMaps
        query={{
          ns: "use-load-options",
          load:
            "control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
        }}
      >
        <YMap
          width="100%"
          height="100%"
          defaultState={{
            center: [60.61, 8.28],
            zoom: 4,
            controls: ["zoomControl", "fullscreenControl"],
          }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedBlackClusterIcons",
            }}
          >
            {hotelsOnMap.map(
              ({ id, name, city, location: { lon, lat }, address }) => (
                <Placemark
                  key={id}
                  geometry={[lat, lon]}
                  properties={{
                    balloonContentHeader: `<span 
                      class='placemark-balloon-link' 
                      data-id=${id} 
                      onclick='window.handleMapRoute(this.dataset.id)'>
                      ${name}</span>`,

                    balloonContentBody: `<span 
                      class='placemark-balloon-address'>
                      ${city}, ${address}</span>`,
                  }}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: markerImg,
                    iconImageSize: [20, 20],
                    iconImageOffset: [-10, -10],
                  }}
                />
              )
            )}
          </Clusterer>
        </YMap>
      </YMaps>
    </Container>
  );
};

export default Map;
