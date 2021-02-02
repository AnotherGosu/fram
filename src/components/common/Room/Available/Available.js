import styled from "styled-components/macro";

const Available = ({ checkIn, checkOut }) => {
  return (
    <Container>
      <span className="available">Available:</span>
      <span>{checkIn}</span>
      <span className="dash">-</span>
      <span>{checkOut}</span>
    </Container>
  );
};

export default Available;

const Container = styled.div`
  .available {
    padding-right: 10px;
  }

  .dash {
    padding: 0 5px;
  }
`;
