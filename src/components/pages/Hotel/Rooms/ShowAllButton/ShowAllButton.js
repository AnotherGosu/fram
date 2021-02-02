import styled from "styled-components/macro";

import CommonButton from "components/common/Button";

const ShowAllButton = ({
  rooms = [],
  filteredRooms = [],
  setShowAll = () => null,
}) => {
  return (
    <Container>
      {rooms.length === filteredRooms.length ? (
        <CommonButton onClick={() => setShowAll(true)} text="All rooms" />
      ) : (
        <CommonButton onClick={() => setShowAll(false)} text="Filtered rooms" />
      )}
    </Container>
  );
};

export default ShowAllButton;

const Container = styled.div`
  margin: 50px auto 0 auto;
  width: max-content;
`;
