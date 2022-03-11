import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBars } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import Bar from "./Bar";
import { useStateValue } from "../../state/StateProvider";
import SearchList from "../search/SearchList";
import { Box, TextField } from "@mui/material";

const ViewBars = () => {
    const [barList, setBarList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    const [{ state }, dispatch] = useStateValue();

    let searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);
    };

    useEffect(() => {
        dispatch({ type: "EMPTY_ORDER" });

        const fetchBars = async () => {
            try {
                const response_promise = API.graphql(
                    graphqlOperation(listBars)
                );

                const response = await response_promise;

                setBarList(response.data.listBars.items);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBars();
    }, [dispatch]);

    return (
        <Box paddingBottom="5em">
            <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search Barfly"
                onChange={searchHandler}
                style={{
                    backgroundColor: "#292929",
                    width: "60%",
                    minWidth: "300px",
                }}
            />
            {searchText !== "" && !isLoading ? (
                <SearchList
                    input={searchText}
                    data={barList}
                    type="bar"
                ></SearchList>
            ) : null}

            <h2>Popular Bars in Your Area</h2>
            {!isLoading ? (
                barList.map((bar) => <Bar key={bar.id} bar={bar} />)
            ) : (
                <LoadingIndicator size="30px" />
            )}
            <Box height="2em" />
        </Box>
    );
};

export default ViewBars;
