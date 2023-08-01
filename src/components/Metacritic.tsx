import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const Metacritic = ({ metacritic }: Props) => {
  const color: string =
    metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";

  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      variant="solid"
      colorScheme={color}
    >
      {metacritic}
    </Badge>
  );
};

export default Metacritic;
