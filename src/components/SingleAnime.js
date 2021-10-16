import React, { useEffect } from 'react';
import { Grid, Typography, Paper, Link } from '@material-ui/core';
import './SingleAnime.scss'

const SingleAnime = (props) => {
    const {title, image_url, episodes, rating, status, broadcast, score, url, synopsis} = props.info;
    useEffect(() => {
        console.log(title, image_url);
    }, [title, image_url]);
    
    return (
        <Grid 
        container 
        spacing={10} 
        direction="row" 
        justify="center" 
        alignItems="center" 
        alignContent="center"
        className="singleAnime__container"
        >
            <Grid item>
                <img src={image_url} alt={title} className="singleAnime__image" />
            </Grid>
            <Grid item>
            <Paper elevation={3} className="singleAnime__description">
                <Typography variant="h4" component="h2">
                    {title}
                </Typography>
                <Typography variant="body1" component="h2">
                    Synopsis: {synopsis}
                </Typography>
                <Typography variant="h5" component="h2">
                    Score: {score}
                </Typography>
                <Typography variant="h5" component="h2">
                    Status: {status}
                </Typography>
                <Typography variant="h5" component="h2">
                    Broadcast: {broadcast}
                </Typography>
                <Typography variant="h5" component="h2">
                    Rating: {rating}
                </Typography>
                <Typography variant="h5" component="h2">
                    Episodes: {episodes}
                </Typography>
                <Link component="button" variant="body1" href={url}>
                    <a href={url}>My Anime List</a>
                </Link>
            </Paper>
            </Grid>
        </Grid>
    );
};

export default SingleAnime;