```javascript
// Correct usage of Firebase Realtime Database query
db.ref('users').orderByChild('score').equalTo(100).once('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const user = childSnapshot.val();
    if (typeof user.score === 'number' && user.score === 100) {
      console.log(user);
    }
  });
});
```