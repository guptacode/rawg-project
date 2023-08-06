import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onMenuSelect: (value: string) => void;
  sortOrder?: string | null;
}

const SortSelector = ({ onMenuSelect, sortOrder }: Props) => {
  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "-date", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSort = sortOptions.find((option) => option.value === sortOrder);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSort?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOptions.map((option) => (
            <MenuItem
              onClick={() => onMenuSelect(option.value)}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
