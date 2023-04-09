import React from 'react'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ColorPopper from '../colorpopper/Colorpopper';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { createNote } from '../../Services/dataservice';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './TakeNoteTwo.css'
function TakeNoteTwo(props) {
    const [note, setNotes] = React.useState({ title: "", description: "", color: "", isArchived: false })

    const redirectTakeOne = () => {
        props.listenTakeNoteTwo()
    }

    const takeTitle = (event) => {
        setNotes((prevState) => ({ ...prevState, title: event.target.value }))
    }
    const takeDescritpion = (event) => {
        setNotes((prevState) => ({ ...prevState, description: event.target.value }))
    }

    const submit = async () => {
        console.log(note)
        let response = await createNote(note)
        console.log(response)
    }
    const createArchive = () => {
        setNotes((prevState) => ({ ...prevState, isArchived: true }))
    }
    return (
        // <div className='abc' >
        // <div className='inner' style={{backgroundColor:note.color}} >
        //   <div className='titlebox'> 
        //    <input style={{backgroundColor:note.color}} onChange={takeTitle} id='inp1' type="text" placeholder='Title' />
        //    <PushPinOutlinedIcon id="Pinicon"/>
        //    </div>
        //     <input style={{backgroundColor:note.color}} onChange={takeDescritpion} type="text" id="txt" placeholder='Take a note...'/>
        //     <div className='iconside'>
        //         <div className='Iconleft'>
        //             <AddAlertIcon />
        //             <PersonAddIcon />
        //            <ColorPopper action="create" setNotes={setNotes} />
        //             <PhotoIcon />
        //             <ArchiveIcon onClick={createArchive} />
        //             <MoreVertIcon />
        //             <UndoOutlinedIcon/>
        //             <RedoOutlinedIcon/>
        //         </div>
        //         <div className='bt' ><button style={{backgroundColor:note.color}} onClick={()=>{submit(); redirectTakeOne()}}>close</button></div>
        //     </div>
        // </div>
        // </div>
<div className='NoteBox'>
        <Box
            sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    // width: "48.5vw",
                    // height: "17vh",
                },
            }}
        >
            <Paper className='inner' style={{ backgroundColor: note.color }}  elevation={2}>   
                <div className='titlebox'>
                    <input style={{ backgroundColor: note.color }} onChange={takeTitle} id='inp1' type="text" placeholder='Title' />
                    <PushPinOutlinedIcon id="Pinicon" />
                </div>
                <input style={{ backgroundColor: note.color }} onChange={takeDescritpion} type="text" id="txt" placeholder='Take a note...' />
                <div className='iconside'>
                    <div className='Iconleft'>
                        <AddAlertIcon fontSize='small' />
                        <PersonAddIcon fontSize='small' />
                        <ColorPopper fontSize='small' action="create" setNotes={setNotes} />
                        <PhotoIcon fontSize='small' />
                        <ArchiveIcon fontSize='small' onClick={createArchive} />
                        <MoreVertIcon fontSize='small'/>
                    </div>
                    <div className='bt' ><button style={{ backgroundColor: note.color }} onClick={() => { submit(); redirectTakeOne() }}>close</button></div>
                </div>

            </Paper>
           
        </Box>
        </div>
    )
}

export default TakeNoteTwo
