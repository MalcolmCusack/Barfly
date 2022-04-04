/* This component displays a single menu item and
the option to select it. */

import { useState } from "react";
import { Button, Typography, Collapse } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { useStateValue } from "../../state/StateProvider";

const MenuItem = ({ item }) => {
    const [{ order }, dispatch] = useStateValue();
    const { enqueueSnackbar } = useSnackbar();
    const [descriptionOpen, setDescriptionOpen] = useState();
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
            onClick={toggleDescription}
            
        >
            <Typography fontFamily={"Arial Black"} >{item.name}</Typography>
            <Box
                display="flex"
                flexDirection="column"
                alignitems="flex-start"
                paddingLeft="1ch"
            >
                <Collapse
                    in={descriptionOpen}
                    // style={{ borderBottom: "1px dotted" }}
                    sx={{
                        borderBottom: "1px dotted",
                        borderColor: (theme) => theme.palette.text.secondary,
                    }}
                >
                    <Typography
                        textAlign="left"
                        color={(theme) => theme.palette.text.secondary}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Tanta vis admonitionis inest in locis; An haec ab eo non
                        dicuntur? Iubet igitur nos Pythius Apollo noscere nosmet
                        ipsos. Quis enim redargueret? salvum esse flentes sui
                        respondissent, rogavit essentne fusi hostes.
                    </Typography>
                </Collapse>
                <Typography
                    color={(theme) => theme.palette.text.secondary}
                    textAlign="left"
                >
                    $ {item.price.toFixed(2)}
                </Typography>
            </Box>
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
        </Box>
    );
};

export default MenuItem;
