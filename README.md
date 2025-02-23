# Firebase Realtime Database Query Bug

This repository demonstrates a bug encountered when using `orderByChild` and `equalTo` with numerical values in Firebase Realtime Database queries.

## Bug Description
The query is intended to retrieve users with a score of 100.  However, it may return unexpected or inconsistent results depending on data type handling. 

## Reproduction
1. Clone this repository.
2. Set up a Firebase project and Realtime Database.
3. Add sample data to your database with numerical scores.
4. Run the `bug.js` file using Node.js (or similar environment).
5. Observe the unexpected result. 

## Solution
The `bugSolution.js` provides a corrected implementation by ensuring data types are handled correctly in the query.  Consider using explicit type conversion for accurate matching.