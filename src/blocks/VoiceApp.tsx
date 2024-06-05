import Block from './Block'
import { BlockModel } from './types'
import './BlockStyles.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicIcon from '@mui/icons-material/Mic';
import Fab from '@mui/material/Fab';

type FakeFormProps = {
  onSave: (name: string) => void;
}

const FakeForm = ({onSave}: FakeFormProps) => {
  const [name, setName] = useState<string>()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name) {
     onSave(name)
     
    }
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input style={{border: "1px solid"}} type="text" value={name} onChange={(e) => setName(e.target.value)}  />
      <button type='submit'>POST</button>
    </form>
    </div>
  )
  
}


export default class VoiceBlock extends Block {
  render() {
    return (
      <div>
        <div>{this.model.data['']}</div>
        <div></div>
        <div></div>
      </div>
    );
  }
  renderEditModal(done: (data: BlockModel) => void) {
    const handleSave = (name: string) => {
      this.model.data["name"] = name
      done(this.model)
    }

    return (
      <>
      <FakeForm onSave={handleSave}/>
        <Card style={{ backgroundColor: 'black', borderRadius: '30px' }} >

          <CardContent style={{ backgroundColor: 'black', padding: '24px', height: 240, display: 'flex', alignItems: 'center', }}>
            <Box style={{
              color: 'black', backgroundColor: 'none', display: 'flex', justifyContent: 'space-between', width: '100%'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <DeleteOutlineIcon style={{ color: 'black', backgroundColor: 'white', borderRadius: '50px' }} />
                <span style={{ color: 'white' }}>0.00</span>
              </div>
              <span style={{ color: 'white' }}>
                .....<GraphicEqIcon />.....
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                < PlayCircleIcon style={{ color: 'white', backgroundColor: 'transparent', borderRadius: '50px' }} />
                <span style={{ color: 'white' }}>0.00</span>

              </div>
            </Box>
          </CardContent>

        </Card>
        <Box style={{
          backgroundColor: 'none', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', width: '100%'
        }} >
          {/* Microphone button */}
          <Fab sx={{ width: { xs: "150px", md: "250px", lg: "250px" }, height: { xs: "150px", md: "250px", lg: "250px" } }} style={{
            backgroundColor: 'black'
          }}>
            <MicIcon style={{
              borderRadius: '50%',
              color: 'white',
            }} />
          </Fab>
          {/* Post button */}
          <Fab sx={{
            width: { xs: "75px", md: "150px", lg: "150px" }, height: { xs: "75px", md: "150px", lg: "150px" }, color: 'white', margin: '10px', padding: '20px'
          }} style={{
            backgroundColor: 'red'
          }}>
            Post
          </Fab>

        </Box>
      </>

    )
  }

  renderErrorState() {
    return (
      <h1>Error!</h1>
    )
  }
}