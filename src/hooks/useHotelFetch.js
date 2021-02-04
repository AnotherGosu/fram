import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHotels } from "redux/slices/hotels";

export default function useHotelFetch(hotelId, item) {
  const dispacth = useDispatch();

  useEffect(() => {
    if (!item) dispacth(fetchHotels(hotelId));
  }, [dispacth, hotelId, item]);
}
