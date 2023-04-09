import React from 'react'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ColorPopper from '../colorpopper/Colorpopper';
import { updateArchive } from '../../Services/dataservice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Deleting } from '../../Services/dataservice';
import './TakeNoteThree.css'


function TakeNoteThree({ noteobj, updatecolor }) {
  const updateArchive1 = async () => {
    let archive = { noteIdList: [noteobj.id], isArchived: true }
    let response = await updateArchive(archive);
    console.log(response)
  }
  const Delete1 = async () => {
    let deletenote = { noteIdList: [noteobj.id], isDeleted: true }
    let response = await Deleting(deletenote);
    console.log(response)
  }

  return (
    // <div className='Outer2' >
    // <div className='inner1' style={{ backgroundColor: noteobj.color }}>
    //     <div className='titlebox'>
    //         <div>{noteobj?.title}</div>
    //         <PushPinOutlinedIcon id="Pin" />
    //     </div>
    //     <div className='descreptionBox'>{noteobj?.description}</div>

    //     <div className='Icons'>
    //         <AddAlertIcon fontSize='small' />
    //         <PersonAddIcon fontSize='small' />
    //         <ColorPopper action="edit" Noteid={noteobj.id} updatecolor={updatecolor} />
    //         <PhotoIcon fontSize='small' />
    //         <ArchiveIcon fontSize='small' onClick={updateArchive1} />
    //         <DeleteOutlineIcon fontSize='small'/>
    //         <MoreVertIcon fontSize='small' />
    //     </div>

    // </div>
    // </div>


    //    <Box
    //    sx={{
    //      display: 'flex',
    //      justifyContent:"center",
    //      alignItems:"center",
    //      flexWrap: 'wrap',
    //      '& > :not(style)': {
    //        m: 1,
    //        width: 150,
    //        height: 128,
    //      },
    //    }}
    //  >
    //    <Paper className='paper' style={{ backgroundColor: noteobj.color }} elevation={2}>

    // <div className='titlebox'>
    //     <div>{noteobj?.title}</div>
    //     <PushPinOutlinedIcon id="Pin" />
    // </div>
    // <div className='descreptionBox'>{noteobj?.description}</div>

    // <div className='Icons'>
    //     <AddAlertIcon fontSize='small' />
    //     <PersonAddIcon fontSize='small' />
    //     <ColorPopper action="edit" Noteid={noteobj.id} updatecolor={updatecolor} />
    //     <PhotoIcon fontSize='small' />
    //     <ArchiveIcon fontSize='small' onClick={updateArchive1} />
    //     <DeleteOutlineIcon fontSize='small'/>
    //     <MoreVertIcon fontSize='small' />
    // </div>
    //    </Paper>
    //  </Box>

    <Grid item container spacing={0} xs={12} sm={6} md={4} lg={3} >

      <Card className='paper' style={{ backgroundColor: noteobj.color, width: 250 }}  >
        <CardContent>
          <Typography className='titlebox' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <div>{noteobj?.title}</div>
            <PushPinOutlinedIcon id="Pin" />
          </Typography>
          <Typography variant="h6">
            <div className='descreptionBox'>{noteobj?.description}</div>
          </Typography>
        </CardContent>
        <CardActions className='Icons'>
          <AddAlertIcon fontSize='small' />
          <PersonAddIcon fontSize='small' />
          <ColorPopper action="edit" Noteid={noteobj.id} updatecolor={updatecolor} />
          <PhotoIcon fontSize='small' />
          <ArchiveIcon fontSize='small' onClick={updateArchive1} />
          <DeleteOutlineIcon fontSize='small' onClick={Delete1} />
          <MoreVertIcon fontSize='small' />
        </CardActions>
      </Card>

    </Grid>




  )
}

export default TakeNoteThree
