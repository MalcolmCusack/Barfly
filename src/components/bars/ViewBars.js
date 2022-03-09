import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBars } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import Bar from "./Bar";
import { Box, Button } from "@mui/material";
import { useStateValue } from "../../state/StateProvider";

const ViewBars = () => {
    const [barList, setBarList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   // const currentBarID="8b421edf-e7c3-4e40-8d6a-9d53e04e98c8";
   //var barList=[]

   const [{state}, dispatch] = useStateValue();


    useEffect(() => {
        dispatch({ type: "EMPTY_ORDER" });

        const fetchBars = async () => {
            try {
                const response_promise = API.graphql(
                    graphqlOperation(listBars)
                );
        
                const response = await response_promise
                  
                
                setBarList(response.data.listBars.items)   
                                      
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
            <h2>Popular Bars in Your Area</h2>
            {!isLoading ? barList.map((bar) => (
                <Bar key={bar.id} bar={bar} />
            )) : <LoadingIndicator size="30px" />}
            <Box height="2em"/>
            
        </Box>
    );
};

export default ViewBars;