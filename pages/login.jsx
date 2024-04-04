import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

function Login() {
  const [passWord, setPassWord] = useState('');
  const [isPassWordError, setIsPassWordError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const handleChange = (e, setState, setErrorState, validation) => {
    const { value } = e.target;
    setState(value);
    setErrorState(!validation(value));
  };
  const validatePhoneNumber = (value) => {
    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/.test(
      value,
    );
  };
  const validatePassword = (value) => {
    return value.length === 8;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passWord.trim() === '' || phoneNumber.trim() === '') {
      setIsPassWordError(passWord.trim() === '');
      setIsPhoneNumberError(phoneNumber.trim() === '');
    } else {
      <Link href="/home" />;
      setIsPassWordError(false);
      setIsPhoneNumberError(false);
    }
  };
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Card
        style={{
          maxWidth: 450,
          padding: '20px 5px',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="PhoneNumber"
                  error={isPhoneNumberError}
                  label="Phone Number"
                  type="text"
                  maxLength={12}
                  placeholder="Enter phone number"
                  variant="outlined"
                  name="PhoneNumber"
                  helperText={
                    isPhoneNumberError ? 'Please enter phone number' : ''
                  }
                  fullWidth
                  value={phoneNumber}
                  onChange={(e) => handleChange(
                    e,
                    setPhoneNumber,
                    setIsPhoneNumberError,
                    validatePhoneNumber,
                  )}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="Password"
                  error={isPassWordError}
                  label="Password"
                  placeholder="Enter Password"
                  variant="outlined"
                  name="Password"
                  helperText={isPassWordError ? 'Please enter Password' : ''}
                  fullWidth
                  value={passWord}
                  onChange={(e) => handleChange(
                    e,
                    setPassWord,
                    setIsPassWordError,
                    validatePassword,
                  )}
                />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: 'end', margin: '10px' }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
