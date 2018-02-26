export function getUser(userRef) {
  return userRef.once('value', (snapshot) => {
    console.log(snapshot.val());
    return {
      type: 'FETCH_USER',
      payload: snapshot.val()
    }
  });
}
