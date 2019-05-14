import TopTitlesView from '../components/TopTitlesView'
import { connect } from 'react-redux';
import * as actions from '../actions/notesAction'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
    return {
    get_all_top_titles: () => { dispatch(actions.getAllTopTitles()); },
    add_top_titles: (topTitles) => { dispatch(actions.addTopTitles(topTitles)); },
    change_is_add_top_titles_state: (state) => { dispatch(actions.changeIsAddTopTitlesState(state)); },
    change_is_del_top_titles_state: (state) => { dispatch(actions.changeIsDelTopTitlesState(state)); },
}}


export default connect(  
    mapStateToProps,
    mapDispatchToProps)(TopTitlesView)