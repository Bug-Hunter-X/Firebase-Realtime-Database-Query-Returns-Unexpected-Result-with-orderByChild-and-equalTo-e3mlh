```javascript
// Incorrect usage of Firebase Realtime Database query
db.ref('users').orderByChild('score').equalTo(100).once('value', (snapshot) => {
  console.log(snapshot.val());
});
```