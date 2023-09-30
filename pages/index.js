import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
//MUI
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//FIN MUI


function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edu promo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <style>
        </style>
      </Head>

      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Edu Promo
          </Typography>
          <Button color="inherit">Nous contacter</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Container>
    <ImageList sx={{ }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Ouesso</ListSubheader>
      </ImageListItem>
      {itemData.map((item, index) => (
        <Link href={"/ecole/"+index} >
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        </Link>
      ))}
    </ImageList>
    </Container>


    </div>
  )
}


const itemData  = [
  {
    img: 'https://img.freepik.com/free-photo/group-african-kids-classroom_23-2148892515.jpg?size=626&ext=jpg&ga=GA1.2.498130083.1663108414&semt=ais',
    title: 'Le bon Berger',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892564.jpg?size=626&ext=jpg&ga=GA1.2.498130083.1663108414&semt=ais',
    title: 'La methode',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://img.freepik.com/free-photo/smiling-little-girl-with-books-ready_1098-3792.jpg?size=626&ext=jpg&ga=GA1.2.498130083.1663108414&semt=ais',
    title: 'La Moisson',
    rows: 2,
  },
  {
    img: 'https://img.freepik.com/free-photo/woman-teaching-kids-class_23-2148892552.jpg?size=626&ext=jpg&ga=GA1.2.498130083.1663108414&semt=ais',
    title: 'Rémo',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://img.freepik.com/premium-photo/african-american-boy-girl-raising-their-hands-while-sitting-class-elementary-school_13339-302305.jpg?size=626&ext=jpg&ga=GA1.2.498130083.1663108414&semt=ais',
    title: 'Théresa',
  },
  {
    img: 'https://img.freepik.com/free-photo/front-view-covid19-concept-school_23-2148777459.jpg?size=626&ext=jpg&ga=GA1.2.498130083.1663108414&semt=ais',
    title: 'La forge',
  },
]