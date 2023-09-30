
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

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
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//FIN MUI


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function Home({data}) {
    const router = useRouter();
    //const id = Number.parseInt(params.id)
    //console.log(router.query)
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
          <Link href="/"><Button color="inherit">Accueil</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>

    <Container maxWidth="md">
    <Card key={-1} sx={{ maxWidth: 600, mt :5, mb : 5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {data.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {data.adresse}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{data.localite}</Button>
        <Button size="small">{data.contact}</Button>
      </CardActions>
    </Card>

    
        {
            data.messages.map((item, index)=>(
                <Card sx={{ mb : 1 }} key={index}>
      <CardActionArea>
                <CardContent sx={{}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.entete}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.contenu}
                    </Typography>
                </CardContent>
                </CardActionArea>
    </Card>
            ))

        }
        
      

    <ImageList
      sx={{ width: 500,}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>


    </div>
  )
}

export async function getServerSideProps({ params }) {
    // Utilisez params.id pour récupérer l'ID de l'école sélectionnée et récupérer les données de l'école
    const id = params.id;
    const data = details[Number.parseInt(id)]
  
    return {
      props: {
        data ,
      },
    };
  }



const details = [
    {
        "id" : 1,
        "label" : "Le bon Berger",
        "image" :"https://img.freepik.com/free-photo/african-kids-having-lesson-school_23-2148892536.jpg?size=626&ext=jpg&ga=GA1.1.498130083.1663108414&semt=ais",
        "description" : "Éducation primaire de qualité avec un accent sur l'apprentissage ludique. Cours enrichis, activités artistiques, éducation physique. Fête annuelle des talents, compétition sportive inter-écoles.",
        "localite" : "Pointe-noire",
        "adresse" : "Quartier Tié-tié vers l'hopital de base.",
        "contact" : "+242 05 001 33 14",
        "messages" : [
            {"entete" : "La rentrée scolaire", "contenu" : "Un contenu très intéressant pour tous!"},
            {
                "entete" : "Résultat des examens du mois d'Octobre",
                "contenu" : `CM1 : 5 admis et 4 échoués\n
                CM2 : 10 admis et 3 échoués.`
            }
        ],
        "images" : []
    }
]


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];