import React from "react";
import Select from "react-select";

const divStyle = {
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  cursor: "pointer",
  userSelect: "none"
};

const spanStyle = {
  color: "white",
  padding: "8px",
  borderRadius: "16px",
  marginLeft: "8px"
};

const options = [
  { label: "Option1", value: 1 },
  { label: "Option2", value: 2 },
  { label: "Option3", value: 3 }
];

const TableRow = (props) => {
  const {
    id,
    label,
    bg,
    deleteItem,
    //updateCount,
    updateOption,
    count,
    active,
    option
  } = props;

//   const handleClick = () => {
//     updateCount(id);
//   };

  const handleSelect = (id, value) => {
    updateOption(id, options[value - 1]);
  };

  const handleContextClick = (e) => {
    e.preventDefault();
    deleteItem(id);
  };

  const Active = () => (
    <span style={{ background: "#689f38", ...spanStyle }}>active {count}</span>
  );

  const Inactive = () => (
    <span style={{ background: "#d32f2f", ...spanStyle }}>
      inactive {count}
    </span>
  );

  return (
    <div
      style={{ ...divStyle, background: bg }}
      //onClick={handleClick}
      //onContextMenu={handleContextClick}
    >
      {label}
      {/* {active ? <Active /> : <Inactive />} */}
      <Select
        options={options}
        value={option}
        onChange={(e) => handleSelect(id, e.value)}
      />
      {/* <Button size='sm' variant='info' onClick={handleDelete}>
        Delete
      </Button> */}
      <button onClick={handleContextClick}>Delete</button>
    </div>
  );
};

export default TableRow;
