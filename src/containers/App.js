import AppView from '../components/AppView'
import { connect } from 'react-redux';
import * as actions from '../actions/notesAction'

const mapStateToProps = (state) => ({
    all_top_titles: state.notes.all_top_titles,
    is_add_titles_state: state.notes.isAddTopTitle,
    is_del_titles_state: state.notes.isDelTopTitle,
})

const mapDispatchToProps = (dispatch) => {
    return {
    get_all_top_titles: () => { dispatch(actions.getAllTopTitles()); },
    add_top_titles: (topTitles) => { dispatch(actions.addTopTitles(topTitles)); },
    change_is_add_titles_state: (state) => { dispatch(actions.changeIsAddTopTitlesState(state)); },
    change_is_del_titles_state: (state) => { dispatch(actions.changeIsDelTopTitlesState(state)); },
}}


export default connect(  
    mapStateToProps,
    mapDispatchToProps)(AppView)