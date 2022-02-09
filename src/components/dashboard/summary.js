import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import Link from 'next/link'
import { Stack } from '@mui/material';
import dynamic from  'next/dynamic'
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
const TrendGraph = dynamic(() => import('../trends/TrendTable'), { ssr: false });

const products = [
  {
    id: uuid(),
    name: '1',
    imageUrl: '/static/Icons/stadler_red.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: '2',
    imageUrl: '/static/Icons/stadler_amber.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: '9',
    imageUrl: '/static/Icons/stadler_green.png',
    updatedAt: subHours(Date.now(), 3)
  }
];

const handleClickOpen = () => {
    
  
};




export const Summary = (props) => (
  <Card {...props}>
    <CardHeader
      
      align=  "center"
      title="Summary "
    />


    <Divider />
  <Stack spacing={8}>
    <img src="/static/Icons/stadler_red.png" width="80" height="80"></img>
    <Divider/>
    <img src="/static/Icons/stadler_amber.png" width="80" height="80"></img>
    <Divider/>
    <img src="/static/Icons/stadler_green.png" width="80" height="80"></img>
  </Stack>
     
  </Card>
  
);
