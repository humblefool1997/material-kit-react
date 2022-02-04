import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import { ImageLoader } from './ImageLoader';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const products = [
  {
    id: uuid(),
    name: 'Baseline Alerts',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Warning Threshold Alerts',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Critical Alerts',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Total Alerts',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 5)
  }
];

export const Compressortrackerred = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title=" Compressor Health Tracker "
    />
    <Divider />
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Unit Number</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="uno"
          
        >
          <Link href='/screen1'>
          <MenuItem value={10}>01</MenuItem>
          </Link>
          <Link href='/screen1amber'>
          <MenuItem value={20}>03</MenuItem>
          </Link>
          <Link href='/screen1red'>
          <MenuItem value={30}>12</MenuItem>
          </Link>
        </Select>
      </FormControl>
      <Button>Unit No: 777012</Button>
    </Box>
    <List>
    <ImageLoader/>
    </List>
    
    <Stack sx={{ width: '30%', color: 'grey.500' }} spacing={1}>
       <LinearProgress color="error" />
      <Button>Compressor A Health 35%</Button>
     
    </Stack>
    <Stack sx={{ width: '30%', color: 'grey.500' }} spacing={1}>
      <LinearProgress color="error" />
      <Button>Compressor B Health 30%</Button>
    </Stack>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
      Last updated since 1 day
      
      </Button>
    </Box>
    
  </Card>
);
