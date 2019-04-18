### `cd app`
### `npm run build`
### open `app/index.html` to see errors in the console.

It says
```
Uncaught Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
```
but the real problem is that dll with hooks compiles with 'aka' second React even if it is the same for both folders.