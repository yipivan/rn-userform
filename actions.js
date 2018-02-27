export function getUser(userRef) { // action creator
  return (dispatch) => {
    userRef.once('value')
    .then(snapshot => {
      dispatch({
        type: 'FETCH_USER',
        payload: snapshot.val()
      });
    });
  } 
}
