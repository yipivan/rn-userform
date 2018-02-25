export function getUser(userRef) {
  return userRef.once('value', (snapshot) => {
    return {
      type: 'FETCH_USER',
      form: snapshot.val()
    }
  });
}
