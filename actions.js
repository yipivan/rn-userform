export function getUser(userRef) {
  return userRef.once('value')
    .then(snapshot => {
      return {
        type: 'FETCH_USER',
        payload: snapshot.val()
      }
    })
}
