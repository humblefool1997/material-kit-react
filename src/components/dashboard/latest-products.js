import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import Link from 'next/link'
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

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


export const Summary = (props) => (
  

  



  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title=" Summary  "
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <div>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 40,
                width: 40
              }
            
            }
            onClick={() => handleClickOpen()} 
            />
            </div>
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
         
          <TrendGraph trend=".." />
        </ListItem>
      ))}
    </List>
    <Divider />
  
     
  </Card>
  
);
