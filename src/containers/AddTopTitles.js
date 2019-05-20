import AddTopTitlesView from '../components/AddTopTitlesView'
import { connect } from 'react-redux';
import * as actions from '../actions/notesAction'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
    return {
    get_all_top_titles: () => { dispatch(actions.getAllTopTitles()); },
    add_top_titles: (topTitles) => { dispatch(actions.addTopTitles(topTitles)); },
    change_main_content_state: (state) => { dispatch(actions.changeMainContentState(state)); },
}}


export default connect(  
    mapStateToProps,
    mapDispatchToProps)(AddTopTitlesView)