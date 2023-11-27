import React from "react";
import "./styles.css";
import Table from "./Table";

export default function App() {
  const selectedPriceTypeRevenueCategories = [
    { id: 0, label: "One", bg: "#e1f5fe", revenueCategoryId: undefined, serviceIncludedId: undefined },
    { id: 1, label: "Two", bg: "#b3e5fc", revenueCategoryId: undefined, serviceIncludedId: undefined },
    { id: 2, label: "Three", bg: "#81d4fa", revenueCategoryId: undefined, serviceIncludedId: undefined },
    { id: 3, label: "Four", bg: "#4fc3f7", revenueCategoryId: 2, serviceIncludedId: 5 },
    { id: 4, label: "Five", bg: "#29b6f6", revenueCategoryId: 3, serviceIncludedId: 1 },
    { id: 5, label: "Six", bg: "#03a9f4", revenueCategoryId: 4, serviceIncludedId: undefined },
    { id: 6, label: "Seven", bg: "#039be5", revenueCategoryId: undefined, serviceIncludedId: undefined },
    { id: 7, label: "Eight", bg: "#0288d1", revenueCategoryId: undefined, serviceIncludedId: undefined },
    { id: 8, label: "Nine", bg: "#0277bd", revenueCategoryId: undefined, serviceIncludedId: undefined },
    { id: 9, label: "Ten", bg: "#01579b", revenueCategoryId: undefined, serviceIncludedId: undefined }
  ];

  const revenueCategoriesDataSource = [
    { label: "RC 1", value: 1},
    { label: "RC 2", value: 2},
    { label: "RC 3", value: 3},
    { label: "RC 4", value: 4},
    { label: "RC 5", value: 5},
  ];

  const servicesIncludedDataSource = [
    { label: "SI 1", value: 1},
    { label: "SI 2", value: 2},
    { label: "SI 3", value: 3},
    { label: "SI 4", value: 4},
    { label: "SI 5", value: 5},
  ];

  return (
    <Table
      selectedPriceTypeRevenueCategories={selectedPriceTypeRevenueCategories}
      revenueCategoriesDataSource={revenueCategoriesDataSource}
      servicesIncludedDataSource={servicesIncludedDataSource}
    />
  );
}
