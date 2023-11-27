import React from "react";
import Select from "react-select";
import { Button } from 'react-bootstrap';

const divStyle = {
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  cursor: "pointer",
  userSelect: "none"
};

const TableRow = (props) => {
  const {
    id,
    label,
    bg,
    revenueCategory,
    serviceIncluded,
    revenueCategoriesDataSource,
    servicesIncludedDataSource,
    deleteItem,
    updateRC,
    updateSI
  } = props;

  const revenueCategoriesDataSourceTest = [
    { label: "RC 1", value: 1},
    { label: "RC 2", value: 2},
    { label: "RC 3", value: 3},
    { label: "RC 4", value: 4},
    { label: "RC 5", value: 5},
  ];

  const servicesIncludedDataSourceTest = [
    { label: "SI 1", value: 1},
    { label: "SI 2", value: 2},
    { label: "SI 3", value: 3},
    { label: "SI 4", value: 4},
    { label: "SI 5", value: 5},
  ];

  const handleRCSelect = (id, value) => {
    //updateRC(id, revenueCategoriesDataSourceTest[value-1]);
    updateRC(id, revenueCategoriesDataSource.find((data) => data.value === value));
  };

  const handleSISelect = (id, value) => {
    //updateSI(id, servicesIncludedDataSourceTest[value-1]);
    updateSI(id, servicesIncludedDataSource.find((data) => data.value === value));
  };

  const handleContextClick = (e) => {
    e.preventDefault();
    deleteItem(id);
  };

  return (
    <div
      style={{ ...divStyle, background: bg }}
    >
      {label}
      <Select
        options={revenueCategoriesDataSource}
        value={revenueCategory}
        onChange={(e) => handleRCSelect(id, e.value)}
      />
      <Select
        options={servicesIncludedDataSource}
        value={serviceIncluded}
        onChange={(e) => handleSISelect(id, e.value)}
      />
      {/* <button onClick={handleContextClick}>Delete</button> */}
      <Button
          size='sm'
          variant='outline-info'
          onClick={handleContextClick}
      >
          Delete
      </Button>
    </div>
  );
};

export default TableRow;
