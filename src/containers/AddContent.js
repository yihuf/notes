import AddContentView from '../components/AddContentView'
import { connect } from 'react-redux';
import * as actions from '../actions/notesAction'

const mapStateToProps = (state) => ({
    all_top_titles: state.notes.all_top_titles,
})

const mapDispatchToProps = (dispatch) => {
    return {
    get_all_top_titles: () => { dispatch(actions.getAllTopTitles()); },
    add_top_titles: (topTitles) => { dispatch(actions.addTopTitles(topTitles)); },
    change_main_content_state: (state) => { dispatch(actions.changeMainContentState(state)); },
}}


export default connect(  
    mapStateToProps,
    mapDispatchToProps)(AddContentView)