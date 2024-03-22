import React from "react";
import PropType from "prop-types"
import { Typography, Stack } from '@mui/material';
import MetadataTableWorkOrder from "../../MetadataTable/MetadataTableWorkOrder";
import { checkFieldIsempty } from "../../../utils/utils";
import { useEffect } from "react";
import { VcrClass_v2, workOrderField } from "../classes/v2/VcrClass_v2";

export default function VcrHeader_v2({ data, icon, handleShowDetailsEventItem }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [vcr, setVcr] = React.useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        if(data) {
            setVcr(data);
        }
      }, [data]);

      useEffect(() => {
      }, [vcr]);

    const handleCloseHorizIcon = () => {
        setAnchorEl(null);
    };

    function formatVcrDataTable(data) {
        return {
            lucidId: checkFieldIsempty(data.lucidId) ? null : JSON.parse(data.lucidId).description,
            startDateTime: data.startDateTime,
            endDateTime: data.endDateTime
        }
    }

    return (
        <>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
                <Stack direction="row"
                    alignItems="center"
                    spacing={2}
                    style={{ minWidth: '20%' }}>
                    <Typography
                        onClick={() => handleShowDetailsEventItem(data.id)} variant="h6" style={{ display: 'inline' }}
                    >
                        {icon}
                    </Typography>
                    <Typography marginBottom={1} variant="h6" style={{ display: 'inline' }}>
                        {data.id}
                    </Typography>
                    <Typography
                        marginBottom={1}
                        marginLeft={1}
                        sx={{display:'inline',  fontWeight: 700, fontSize: '11px', opacity: 0.5 }}
                    >
                            {data.name}
                    </Typography>
                </Stack>
                
                
            </Stack>
        </>
    );
}

VcrHeader_v2.propsType = {
    event: PropType.instanceOf(VcrClass_v2)
}
