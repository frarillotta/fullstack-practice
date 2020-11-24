import {connect} from "react-redux";
import AppView from "./AppView";
import {filmListRequested} from "../../Store/Actions/FilmListRequested/FilmListRequested";

const mapStateToProps = (state) => {

    console.log(state);

    return {
        films: state.list.films,
        fetching: state.list.fetching
    }

};

const mapDispatchToProps = (dispatch) => {

    const getFilmList = (filmQuery) => {
        dispatch(filmListRequested(filmQuery))
    };

    return {
        getFilmList
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
