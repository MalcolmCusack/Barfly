import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBars } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import Bar from "./Bar";
import SearchList from "../search/SearchList"
import SearchIcon from "@mui/icons-material/Search";
import { Box,  TextField, InputAdornment  } from "@mui/material";

const ViewBars = () => {
    const [barList, setBarList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchText, setSearchText] = useState("");
    
   // const currentBarID="8b421edf-e7c3-4e40-8d6a-9d53e04e98c8";
   //var barList=[]
    let searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);
    };

    useEffect(() => {

        const fetchBars = async () => {
            try {
                const response_promise = API.graphql(
                    graphqlOperation(listBars)
                );
        
                const response = await response_promise
                  
                
                setBarList(response.data.listBars.items)   
                  
                console.log(response.data.listBars.items)
                console.log(barList)
    
            } catch (err) {
                 console.log(err);
            
            }finally{
                setIsLoading(false);
            }
        };

        fetchBars();


    }, []);

    return (
        <Box paddingBottom="5em">
            <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search Barfly"
                  onChange={searchHandler}
                  style={{ backgroundColor:"#292929", width: "60%", minWidth: "300px" }}
                  InputProps={{ endAdornment: ( <InputAdornment> <SearchIcon /> </InputAdornment> ) }}
               />
            {(searchText!="" && !isLoading) ? <SearchList input={searchText}  data={barList} type="bar"></SearchList> : null}
           
           
            <h2>Popular Bars in Your Area</h2>
            {!isLoading ? barList.map((bar) => (
                <Bar key={bar.id} bar={bar} />
            )) : <LoadingIndicator size="30px" />}
            <Box height="2em"/>
            
        </Box>
    );
};

export default ViewBars;