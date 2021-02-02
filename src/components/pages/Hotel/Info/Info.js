import { Section, Title } from "./styled";

import CommonStarsRating from "components/common/StarsRating";

const Info = ({ name = "", city = "", address = "", rating = 1 }) => {
  return (
    <Section>
      <div>
        <Title>
          <h2>{name}</h2>
          <div className="rating">
            <CommonStarsRating rating={rating} />
          </div>
        </Title>
        <span>{`${city}, ${address}`}</span>
      </div>
      <p className="description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </Section>
  );
};

export default Info;
