import { Box } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../config/firebase';

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ display: 'flex' }} sx={{ margin: 10 }} >
      Welcome {user.email}
    </Box>
  )
}

export default Profile