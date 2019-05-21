import axios from 'axios';

export const getAllTopTitles = () => {
    return (dispatch) => {
      const url = 'http://127.0.0.1:8000/notes/top_titles/000-000-000-000/';
      axios.get(url)
        .then((response) => {
          dispatch(
            {
              type: 'GET_ALL_TOP_TITLES',
              payload: response.data
            }
          )
        }).catch((error) => {
          dispatch({
            type: 'ERRORS',
            payload: 'error'
          })
        })
      }
  };

  export const getTitlesByParentUuid = (parentUuid) => {
    return (dispatch) => {
      const url = 'http://127.0.0.1:8000/notes/top_titles/' + parentUuid + '/';
      axios.get(url)
        .then((response) => {
          dispatch(
            {
              type: 'GET_ALL_TOP_TITLES',
              payload: response.data
            }
          )
        }).catch((error) => {
          dispatch({
            type: 'ERRORS',
            payload: 'error'
          })
        })
      }
  }

  export const addTopTitles = (topTitles) => {
    return (dispatch) => {
      const url = 'http://127.0.0.1:8000/notes/titles/';
      axios.post(url, topTitles)
        .then(
          (response) => {
            dispatch(getAllTopTitles())
          }
        ).catch((error) => {
          dispatch({
            type: 'ERRORS',
            payload: 'error'
          })
        })
      }
  }

  export const delTopTitles = (uuid) => {
    return (dispatch) => {
      const url = 'http://127.0.0.1:8000/notes/titles/' + uuid + '/';
      axios.delete(url)
        .then(
          (response) => {
            dispatch(getAllTopTitles())
          }
        ).catch((error) => {
          dispatch({
            type: 'ERRORS',
            payload: 'error'
          })
        })
      }
  } 

  export const changeMainContentState = (state) => {
    return (dispatch) => {
      dispatch(
        {
          type:'MAIN_CONTENT_STATE',
          payload:state
        }
      )
    }
  }
