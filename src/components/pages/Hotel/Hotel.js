import { Grid } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels, selectHotelById } from "redux/slices/hotels";
import { selectFilteredRoomsByHotelId } from "redux/slices/rooms";

import CommonPageContainer from "components/common/PageContainer";
import Gallery from "./Gallery";
import Info from "./Info";
import Rooms from "./Rooms";

const Hotel = ({ match }) => {
  const { hotelId } = match.params;
  const dispatch = useDispatch();

  const hotel = useSelector((state) => selectHotelById(state, hotelId));
  const filteredRooms = useSelector((state) =>
    selectFilteredRoomsByHotelId(state, hotelId)
  );

  const {
    name = "",
    city = "",
    rating = 1,
    address = "",
    images = [],
    rooms = [],
  } = hotel || {};

  useEffect(() => {
    if (!hotel) dispatch(fetchHotels(hotelId));
  }, [dispatch, hotel, hotelId]);

  return (
    <CommonPageContainer slice="hotels" title={name}>
      <Grid>
        <div className="gallery">
          <Gallery images={images} name={name} />
        </div>
        <div className="info">
          <Info name={name} city={city} address={address} rating={rating} />
        </div>
        <div className="rooms">
          <Rooms filteredRooms={filteredRooms} allRooms={rooms} />
        </div>
      </Grid>
    </CommonPageContainer>
  );
};

export default Hotel;
