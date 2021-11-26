import { useState } from "react";
import { Button, Typography, Collapse } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { useStateValue } from "../../state/StateProvider";

const MenuItem = ({ item }) => {
    const [{ order }, dispatch] = useStateValue();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [descriptionOpen, setDescriptionOpen] = useState();
    const openDescription = () => setDescriptionOpen(true);
    const closeDescription = () => setDescriptionOpen(false);
    const toggleDescription = () => setDescriptionOpen(!descriptionOpen);

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

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            padding="1ch"
            borderColor={(theme) => theme.palette.primary.main}
            borderBottom="1px solid"
            // style={{ borderBottom: "1px solid #fcba03", paddingBottom: "20px" }}
        >
            <Typography>{item.name}</Typography>
            <Box
                display="flex"
                flexDirection="column"
                alignitems="flex-start"
                paddingLeft="1ch"
                onClick={toggleDescription}
            >
                <Typography
                    color={(theme) => theme.palette.text.secondary}
                    textAlign="left"
                >
                    $ {item.price.toFixed(2)}
                </Typography>
                <Collapse in={descriptionOpen}>
                    test description test description test description test
                    descriptanalkfnasd
                </Collapse>
            </Box>
            <Button size="small" variant="contained" onClick={addToOrder}>
                Add To Order
            </Button>
        </Box>
    );
};

export default MenuItem;
