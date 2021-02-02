import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredHotels } from "redux/slices/hotels";
import { hotelsOnPage } from "constants.js";

import CommonLoader from "components/common/Loader";
import HotelCardsGrid from "./HotelCardsGrid";
import Pagination from "./Pagination";

const SearchResults = () => {
  const [isProcessed, setIsProcessed] = useState(true);

  const status = useSelector((state) => state.showParams.status);
  const currentPage = useSelector((state) => state.showParams.currentPage);
  const hotels = useSelector((state) => selectFilteredHotels(state));
  const firstFetch = useSelector((state) => state.hotels.firstFetch);

  const pages = Math.ceil(hotels.length / hotelsOnPage);
  const pagedHotels = hotels.slice(
    (currentPage - 1) * hotelsOnPage,
    currentPage * hotelsOnPage
  );

  //show loader for at least 500ms for better UX
  useEffect(() => {
    let timer;
    if (status === "pending") {
      setIsProcessed(false);
    } else if (status === "fulfilled") {
      timer = setTimeout(() => setIsProcessed(true), 500);
    }
    return () => clearTimeout(timer);
  }, [status]);

  return firstFetch && isProcessed ? (
    <>
      <HotelCardsGrid hotels={pagedHotels} />
      <Pagination pages={pages} currentPage={currentPage} />
    </>
  ) : (
    <CommonLoader />
  );
};

export default SearchResults;
