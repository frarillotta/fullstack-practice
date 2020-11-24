import React from "react";
import {OMDBApi} from "../../API/OMDBApi/OMDBApi";
import {TextField, Paper, Grid, Container, Typography, Button} from "@material-ui/core";

interface AppProps {

    getFilmList: (query) => void,
    films: any[],
    fetching: boolean

}

interface StateProps {

    query: string

}

class AppView extends React.Component<AppProps, StateProps> {

    constructor(props) {

        super(props);

        this.state = {
            query: ""
        }

    }

    render() {

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
                            {/*<Paper><div>asd</div></Paper>*/}
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        )
    }

    renderFilmListTile(film) {

        return(
            <Grid item xs={12} key={film.imdbID}>
                <Paper style={{padding: "15px"}}>
                    <Grid container spacing={4} key={film.imdbID}>
                        <Grid item xs={6}>
                            <img src={film.Poster} style={{maxWidth:"200px"}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h5"}>{film.Title}</Typography>
                            <Typography variant={"body1"}>{film.Year}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )

    }

    // renderSelectedFilmTile() {
    //
    //
    // }

    handleOnChange(event) {

        event.preventDefault();

        this.setState({query: event.target.value});

    }

    getFilmList() {

        console.log(this.state.query);

        this.props.getFilmList(this.state.query);

    }

}


export default AppView
