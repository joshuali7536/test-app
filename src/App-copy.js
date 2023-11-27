import React, { useState } from "react";
import "./styles.css";
import { FixedSizeList } from "react-window";
import TableRow from "./TableRow";

const Row = ({ data, style, index }) => (
  <div key={index} style={style}>
    {data[index]}
  </div>
);

export default function AppCopy() {
  const initialItems = [
    { id: 0, label: "One", bg: "#e1f5fe" },
    { id: 1, label: "Two", bg: "#b3e5fc" },
    { id: 2, label: "Three", bg: "#81d4fa" },
    { id: 3, label: "Four", bg: "#4fc3f7" },
    { id: 4, label: "Five", bg: "#29b6f6" },
    { id: 5, label: "Six", bg: "#03a9f4" },
    { id: 6, label: "Seven", bg: "#039be5" },
    { id: 7, label: "Eight", bg: "#0288d1" },
    { id: 8, label: "Nine", bg: "#0277bd" },
    { id: 9, label: "Ten", bg: "#01579b" }
  ];

  //Updated to add a count and active property to every obj in the array.
  const [items, setItems] = useState(
    initialItems.map((obj) => ({
      ...obj,
      count: 0,
      active: false,
      option: null
    }))
  );

  const deleteItem = (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  //const updateCount = (id, option) => {
  // let newItems = items.map((item) => {
  //   if (item.id === id) {
  //     return {
  //       ...item,
  //       option: option
  //     };
  //   } else return { ...item };
  // });
  // setItems(newItems);
  //};

  const updateOption = (id, option) => {
    let newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          option: option
        };
      } else return { ...item };
    });
    setItems(newItems);
  };

  const componentItems = items.map((item) => {
    return (
      <TableRow
        id={item.id}
        label={item.label}
        bg={item.bg}
        count={item.count}
        active={item.active}
        option={item.option}
        deleteItem={deleteItem}
        //updateCount={updateCount}
        updateOption={updateOption}
      />
    );
  });

  return (
    <div className="App">
      <FixedSizeList
        height={500}
        width={400}
        itemCount={componentItems.length}
        itemSize={50}
        itemData={componentItems}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}
