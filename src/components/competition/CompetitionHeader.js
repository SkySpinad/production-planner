import React from "react";
import { Typography, Stack } from '@mui/material';
import { CompetitionClass, competitionField } from "./classes/CompetitionClass";
import MetadataTable from "../MetadataTable/MetadataTable";
import PropType from "prop-types";
import CustomStatusItem from "../../components/list/v2/CustomStatusItem";

export default function CompetitionHeader({ data, icon, handleShowDetailsEventItem }) {

    return  <Stack direction="row"
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
                    <Typography
                        marginBottom={1}
                        marginLeft={1}
                        sx={{display:'inline',  fontWeight: 700, fontSize: '11px', opacity: 0.5 }}
                    >
                        {data.eventGroupId}
                    </Typography>
                </Stack>
                <MetadataTable fields={competitionField} metadata={data}  />
                <CustomStatusItem encoder={data} />
                <CustomStatusItem encoder={data} />
                <CustomStatusItem encoder={data} />
            </Stack>
}

CompetitionHeader.propsType = {
    encoder: PropType.instanceOf(CompetitionClass)
}

