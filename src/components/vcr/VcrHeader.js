import React from "react";
import PropType from "prop-types"
import { Typography, Stack } from '@mui/material';
import SingleListAvatarItem from "../list/SingleListAvatarItem";
import { styleAvatar } from "../../common/layout";
import MetadataTableWorkOrder from "../MetadataTable/MetadataTableWorkOrder";
import { VcrClass, workOrderField } from "./classes/VcrClass";
import MenuVcr from "../menu/MenuVcr";
import { checkFieldIsempty } from "../../utils/utils";
import { useEffect } from "react";

export default function VcrHeader({ data, icon, handleUpdateCompetition, handleShowDetailsEventItem }) {

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

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    var menu = <MenuVcr
        handleUpdateCompetition={handleUpdateCompetition}
        element={vcr}
        handleCloseHorizIcon={handleCloseHorizIcon}
        open={open}
        anchorEl={anchorEl}
    />

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
                        onClick={() => handleShowDetailsEventItem(data.eventGroupId)} variant="h6" style={{ display: 'inline' }}
                    >
                        {icon}
                    </Typography>
                    <Typography marginBottom={1} variant="h6" style={{ display: 'inline' }}>
                        {data.competitionName}
                    </Typography>
                </Stack>
                {
                    vcr && <MetadataTableWorkOrder fields={workOrderField} metadata={formatVcrDataTable(vcr)} />

                }
                <div style={{ width: '50px' }}>
                    <SingleListAvatarItem handleClickHorizIcon={handleMenu} styleAvatar={styleAvatar} />
                </div>
                {menu}
            </Stack>
        </>
    );
}

VcrHeader.propsType = {
    event: PropType.instanceOf(VcrClass)
}
