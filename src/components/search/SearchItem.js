import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { useStateValue } from "../../state/StateProvider";

const SearchItem = ({ item, type }) => {
    const [{ state }, dispatch] = useStateValue();
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const goToMenu = () => {
        dispatch({
            type: "SET_BAR",
            bar: item,
        });
        navigate("./menu");
    };

    const addToOrder = () => {
        dispatch({
            type: "ADD_TO_ORDER",
            item: {
                id: item.id,
                name: item.name,
                price: item.price,
            },
        });

        enqueueSnackbar(`${item.name} Added To Order`, {
            autoHideDuration: 1000,
        });
    };

    const renderAdd = () => {
        return (
            <Button
                size="small"
                variant="contained"
                onClick={(e) => {
                    e.stopPropagation();
                    addToOrder();
                }}
            >
                Add To Order
            </Button>
        );
    };

    const renderSelect = () => {
        return (
            <Button variant="outlined" onClick={goToMenu}>
                Select Bar
            </Button>
        );
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="1ch"
            borderColor={(theme) => theme.palette.primary.main}
            border="0.5px solid"
            borderTop="0"
            borderBottom="0"
            backgroundColor="#222"
        >
            <Typography>{item.name}</Typography>

            {type === "menuItem" ? renderAdd() : null}
            {type === "bar" ? renderSelect() : null}
        </Box>
    );
};

export default SearchItem;
