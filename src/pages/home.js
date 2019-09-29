import React,{useEffect,useState} from 'react';
import {AppBar, Toolbar, Typography, Card, Button, CardContent, CardMedia, Container } from '@material-ui/core';


const Digimon = (props) => (
    <Card elevation={2} style={ { display: 'inline-block',  margin:'5px', width: '20%' } }>
        <CardContent>
            <CardMedia src={props.img} alt={`Imagem do digimon ${props.name}`} component="img" />
            <Typography gutterBottom variant='h5' >{props.name}</Typography>
            <Typography variant='body2'><p>Level: {props.level}</p></Typography>
        </CardContent>
    </Card>
);


export function HomePage()
{ 
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('https://digimon-api.herokuapp.com/api/digimon')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
              console.log("Resultado da requisição:",response);
              setData(response);
        })
        .catch((error)=>{
          console.log(error);
        });
    }, [setData])
   
        if(data.length > 0)
        {
            return (
                data.map((digimon)=> (
                    <div>
                        <Digimon key={digimon.name} {...digimon} />
                    </div>
                )
            ));
        }
        else
        {
            return <p>Carregando....</p>
        }
}