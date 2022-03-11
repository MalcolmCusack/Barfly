import React from "react";
import SearchItem from "./SearchItem";

function SearchList(props) {
    var filteredData = props.data.filter((el) => {
        //if no input the return the original
        if (props.input === "") {
            return el.name;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input);
        }
    });

    return (
        <div
            style={{
                backgroundColor: "#292929",
                width: "60%",
                minWidth: "300px",
                margin: "auto",
                display: "block",
                borderBottom: "0.5px solid",
            }}
        >
            {filteredData.map((item) => (
                <SearchItem key={item.id} item={item} type={props.type} />
            ))}
        </div>
    );

    //return (
    //     null
    // )
}

export default SearchList;
