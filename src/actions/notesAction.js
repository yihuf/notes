import axios from 'axios';

export const getAllTopTitles = () => {
    return (dispatch) => {
      const url = 'http://127.0.0.1:8000/notes/top_titles/';
      axios.get(url)
        .then((response) => {
          dispatch(
            {
              type: 'GET_ALL_TITLES',
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

  export const addTopTitles = (topTitles) => {
    return (dispatch) => {
      const url = 'http://127.0.0.1:8000/notes/titles/';
      axios.post(url, topTitles)
        .then(
          (response) => {
            console.log(response.data)
          }
        ).catch((error) => {
          dispatch({
            type: 'ERRORS',
            payload: 'error'
          })
        })
      }
  }

  export const changeIsAddTopTitlesState = (state) => {
    return (dispatch) => {
      dispatch(
        {
          type:'IsAddTiTlesState',
          payload:state
        }
      )
    }
  }

  export const changeIsDelTopTitlesState = (state) => {
    return (dispatch) => {
      dispatch(
        {
          type:'IsDelTiTlesState',
          payload:state
        }
      )
    }
  }


