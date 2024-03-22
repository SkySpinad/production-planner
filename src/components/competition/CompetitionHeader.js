import React from "react";
import { Typography, Stack } from '@mui/material';
import { useEffect } from "react";

export default function CompetitionHeader({ data, icon, handleShowDetailsEventItem }) {

    const [competition, setCompetition] = React.useState(null);

    useEffect(() => {
        if(data) {
            setCompetition(data);
        }
      }, [data]);

      useEffect(() => {
      }, [competition]);


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

