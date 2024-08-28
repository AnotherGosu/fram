import { Dumbbell, ForkKnife, Tv, Wifi } from "lucide-react";

interface FacilityIconProps {
  facility: string;
}

export const FacilityIcon = ({ facility }: FacilityIconProps) => {
  switch (facility) {
    case "Internet": {
      return <Wifi className="size-4" />;
    }

    case "TV": {
      return <Tv className="size-4" />;
    }

    case "Kitchen": {
      return <ForkKnife className="size-4" />;
    }

    case "Gym": {
      return <Dumbbell className="size-4" />;
    }

    default: {
      return <></>;
    }
  }
};
