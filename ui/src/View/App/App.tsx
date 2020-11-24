import {connect} from "react-redux";
import AppView from "./AppView";
import {filmListRequested} from "../../Store/Actions/FilmListRequested/FilmListRequested";
import {filmRequested} from "../../Store/Actions/FilmRequested/FilmRequested";

const mapStateToProps = (state) => {

    console.log(state);

    return {
        films: state.list.films,
        fetchingFilmList: state.list.fetching,
        filmDetails: state.film.filmDetails,
        fetchingFilm: state.film.fetching
    }

};

const mapDispatchToProps = (dispatch) => {

    const getFilmList = (filmQuery) => {
        dispatch(filmListRequested(filmQuery));
    };

    const getFilm = (filmId) => {
        dispatch(filmRequested(filmId));
    };

    return {
        getFilmList,
        getFilm
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
