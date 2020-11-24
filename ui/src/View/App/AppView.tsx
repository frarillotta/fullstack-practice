import React from "react";
import {OMDBApi} from "../../API/OMDBApi/OMDBApi";
import {TextField, Paper, Grid, Container, Typography, Button} from "@material-ui/core";

interface AppProps {

    getFilmList: (query) => void,
    getFilm: (imdbId) => void,
    films: any[],
    fetchingFilmList: boolean,
    filmDetails: Object,
    fetchingFilm: boolean

}

interface StateProps {

    activeFilm: string,
    query: string

}

class AppView extends React.Component<AppProps, StateProps> {

    constructor(props) {

        super(props);

        this.state = {
            activeFilm: "",
            query: ""
        }

    }

    render() {

        console.log(this.props);

        return(
            <Paper>
                <Container>
                    <TextField label="search some stuff"
                               variant="filled"
                               color="secondary"
                               onChange={this.handleOnChange.bind(this)}
                    />
                    <Button onClick={this.getFilmList.bind(this)}>hit me daddy</Button>
                    <Grid container spacing={4}>
                        <Grid container item spacing={3} xs={6}>
                        {this.props.films.map((film)=>{
                            return this.renderFilmListTile(film)
                        })}
                        </Grid>
                        <Grid container item xs={6}>
                            {this.renderSelectedFilmTile(this.props.filmDetails)}
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        )
    }

    renderFilmListTile(film) {

        //TODO: add spinner when fetching is true

        return(
            <Grid item xs={12} key={film.imdbID} onClick={this.getFilm.bind(this, film.imdbID)}>
                <Paper style={{padding: "15px"}}>
                    <Grid container spacing={4} key={film.imdbID}>
                        <Grid item xs={6}>
                            <img src={film.Poster} style={{maxWidth:"200px"}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h5"}>{film.Title}</Typography>
                            <Typography variant={"body2"}>{film.Year}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )

    }

    renderSelectedFilmTile(film) {
//TODO: add return if film is empty array

        console.log(film)

        if(!film.Poster) {

            return (<div></div>)

        }

        return (

            <Grid item xs={12}>
                <Paper style={{padding: "15px"}}>
                    <Grid container spacing={2} xs={12}>
                        <Grid item xs={6}>
                            <img src={film.Poster} style={{maxWidth:"200px"}}/>

                        </Grid>
                        <Grid container item xs={6}>
                            <Typography variant={"h5"}>{film.Title}
                                <Typography variant={"body2"}>{film.Year}</Typography>

                                <Typography variant={"body2"}>{film.Genre}</Typography>

                            </Typography>
                            <Grid item/>
                            <Grid item xs={12}>
                                <Typography variant={"body1"}>{film.Plot}</Typography>

                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid container spacing={4} xs={12}>
                        <Grid container item xs={6} spacing={4}>
                            <Grid item xs={12} spacing={4}>
                                <Typography variant={"body2"}>
                                    Duration: {film.Runtime}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} spacing={4}>
                                <Typography variant={"body2"}>
                                    Starring: {film.Actors}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} spacing={4}>
                                <Typography variant={"body2"}>
                                    Directed by: {film.Director}
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid container item xs={6} spacing={4} justify={"space-evenly"} alignItems="center">
                            <Grid item xs={12} spacing={4}>
                                <Typography variant={"body2"}>
                                    Ratings:
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} spacing={1} alignItems="center">
                                <Grid item>
                                    <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" style={{maxWidth:"50px"}}/>
                                </Grid>
                                <Grid item>

                                    <Typography>
                                        &nbsp;{film.Ratings[0].Value}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={1} alignItems="center">
                                <Grid item>
                                    <img src="https://static.tvtropes.org/pmwiki/pub/images/rotten_tomatoes_8290.jpg" style={{maxWidth:"50px"}}/>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        &nbsp;{film.Ratings[1].Value}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={1} alignItems="center">
                                <Grid item>
                                    <img src="https://media.pcgamesinsider.biz/2019/1/95065/metacriticlogo-r225x.png" style={{maxWidth:"50px"}}/>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        &nbsp;{film.Ratings[2].Value}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        )

    }

    handleOnChange(event) {

        event.preventDefault();

        this.setState({query: event.target.value});

    }

    getFilmList() {

        this.props.getFilmList(this.state.query);

    }

    getFilm(imdbId) {

        this.props.getFilm(imdbId);

    }

}


export default AppView
