import React, { useState } from "react";
import "./styles.css";
import { FixedSizeList } from "react-window";
import TableRow from "./TableRow";

const Row = ({ data, style, index }) => (
<div key={index} style={style}>
    {data[index]}
</div>
);

const Table = (props) => {
    const {
        selectedPriceTypeRevenueCategories,
        revenueCategoriesDataSource,
        servicesIncludedDataSource
      } = props;

      const hardCoded = [
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

    //Updated to add a count and active property to every obj in the array.
    const [items, setItems] = useState(
        selectedPriceTypeRevenueCategories.map((obj) => ({
        ...obj,
        //revenueCategory: revenueCategoriesDataSource.find((data) => data.value === obj.revenueCategoryId),
        //serviceIncluded: servicesIncludedDataSource.find((data) => data.value === obj.serviceIncludedId)
        revenueCategory: null,
        serviceIncluded: null
        }))
    );

    console.log(items);

    const deleteItem = (id) => {
        let newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    const updateRevenueCategory = (id, revenueCategory) => {
        let newItems = items.map((item) => {
        if (item.id === id) {
            return {
            ...item,
            revenueCategory: revenueCategory
            };
        } else return { ...item };
        });
        setItems(newItems);
    };

    const updateServiceIncluded = (id, serviceIncluded) => {
        let newItems = items.map((item) => {
        if (item.id === id) {
            return {
            ...item,
            serviceIncluded: serviceIncluded
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
            revenueCategory={item.revenueCategory}
            serviceIncluded={item.serviceIncluded}
            revenueCategoriesDataSource={revenueCategoriesDataSource}
            servicesIncludedDataSource={servicesIncludedDataSource}
            deleteItem={deleteItem}
            updateRC={updateRevenueCategory}
            updateSI={updateServiceIncluded}
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

export default Table;