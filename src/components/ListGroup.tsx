import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook: gives state to a functional component
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // () needed to wrap JSX into multiple lines
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
