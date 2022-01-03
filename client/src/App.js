import React from 'react'
import './App.css';

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

import { Typography, AppBar } from '@material-ui/core'

const App = () => {
  return (
    <div>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App

