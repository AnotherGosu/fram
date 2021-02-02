import { Grid } from "./styled";
import { useState, useEffect, useRef } from "react";

import CommonRoom from "components/common/Room";
import ShowAllButton from "./ShowAllButton";

const Rooms = ({ filteredRooms = [], allRooms = [] }) => {
  const [rooms, setRooms] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const gridScrollRef = useRef(null);
  const initialLoad = useRef(false); // prevent scrolling on page load

  useEffect(() => {
    showAll ? setRooms(allRooms) : setRooms(filteredRooms);

    if (gridScrollRef.current && initialLoad.current) {
      gridScrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }

    initialLoad.current = true;
  }, [showAll, allRooms, filteredRooms]);

  return (
    <section>
      <h2>Available rooms</h2>
      <Grid ref={gridScrollRef}>
        {rooms.map((room) => (
          <CommonRoom key={room.id} {...room} showBookBtn />
        ))}
      </Grid>
      {allRooms.length !== filteredRooms.length && (
        <ShowAllButton
          rooms={rooms}
          filteredRooms={filteredRooms}
          setShowAll={setShowAll}
        />
      )}
    </section>
  );
};

export default Rooms;
