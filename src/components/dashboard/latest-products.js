import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import Link from 'next/link'

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

export const LatestProducts = (props) => (
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
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          > <Link href='/screen2'>
            <MoreVertIcon />
            </Link>
          </IconButton>
        </ListItem>
      ))}
    </List>
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
