import React, { useState } from 'react'
import Header from "../../Components/Header/Header";
import TakeNoteOne from "../../Components/TakeNoteone/TakeNoteOne";
import TakeNoteThree from "../../Components/TakeNoteThree/TakeNoteThree";
import TakeNoteTwo from "../../Components/TakeNoteTwo/TakeNoteTwo";
import { getNotes } from '../../Services/dataservice';
import './dashboard.css'
import NavDrawer from '../NavDrawer/NavDrawer';

function Dashboard() {
  const [toggles, setToggle] = useState(true)
  const [notes, setNotes] = useState([])
  const [open, setOpen] = React.useState(false);
  const[typeOfNotes,setTypeOfNotes] = React.useState('Notes')

const handleDrawer = () => {
  setOpen(!open);
};
  const listenTakeNoteOne = () => {
    setToggle(false);
  }
  const listenTakeNoteTwo = () => {
    setToggle(true);
  }

  const loaddata = async () => {
    let response = await getNotes()
    let arr = response.data.data.data
    if(typeOfNotes === 'Notes') {

      let newArr = arr.filter((note)=>note.isArchived === false && note.isDeleted===false)
      setNotes(newArr)

    } else if(typeOfNotes === 'Archive') {
      let newArr = arr.filter((note)=>note.isArchived === true && note.isDeleted===false)
      setNotes(newArr)
    }
    else if(typeOfNotes === 'Trash') {
      let newArr = arr.filter((note)=>note.isArchived === false && note.isDeleted===true)
      setNotes(newArr)
    }
  }

  const updatecolor=()=>{
    loaddata()
  }
  console.log(notes)

  React.useEffect(() => {
    loaddata()
  }, [typeOfNotes])

  return (
    <div >
      <Header handleDrawer={handleDrawer}/>
      <NavDrawer open={open} setTypeOfNotes={setTypeOfNotes}/>
      {
        toggles ? <TakeNoteOne listenTakeNoteOne={listenTakeNoteOne} /> : <TakeNoteTwo listenTakeNoteTwo={listenTakeNoteTwo} />
      }
      <div className='flex'>
        {
          notes.map((noteobj) => (<TakeNoteThree noteobj={noteobj}  updatecolor={updatecolor} />))
        }
      </div>
    </div>
  )
}

export default Dashboard
