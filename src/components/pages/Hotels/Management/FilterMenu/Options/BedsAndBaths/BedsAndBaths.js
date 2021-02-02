import { Container, Title, Content, Value, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setOptions, selectOption } from "redux/slices/filterParams";

const Option = ({ name }) => {
  const optionValue = useSelector((state) => selectOption(state, name));
  const dispatch = useDispatch();

  const handleOptionChange = (value) => {
    const newValue = optionValue + value;
    dispatch(setOptions({ name, value: newValue }));
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Content>
        <Button
          type="button"
          disabled={optionValue === 0 ? true : false}
          onClick={() => handleOptionChange(-1)}
        >
          -
        </Button>
        <Value>{optionValue}</Value>
        <Button type="button" onClick={() => handleOptionChange(+1)}>
          +
        </Button>
      </Content>
    </Container>
  );
};

export default Option;
