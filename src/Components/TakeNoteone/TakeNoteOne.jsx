import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import CollectionsIcon from '@mui/icons-material/Collections';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './TakeNoteOne.css'
function TakeNoteOne(props) {
    const redirectTakeTwo = () => {
        props.listenTakeNoteOne()
    }
    return (
        // <div className='outer1'>
        // <div className='takeone' onClick={redirectTakeTwo}>
        //     <p className='left'>Take a note...</p>
        //     <div className='right1'>
        //         <CheckBoxIcon />
        //         <BrushIcon />
        //         <CollectionsIcon />
        //     </div>
        // </div>
        // </div>

        <Box
            sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: "48.5vw",
                    height: "7vh",
                },
            }}
        >
            <Paper className='outer1' elevation={2}>
                <div className='takeone' >
                    <p className='left' onClick={redirectTakeTwo}>Take a note...</p>
                    <div className='right1'>
                        <CheckBoxIcon />
                        <BrushIcon />
                        <CollectionsIcon />
                    </div>
                </div>
            </Paper>
        </Box>
    )
}
export default TakeNoteOne
