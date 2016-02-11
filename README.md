react-starter-kit
=======================

This project is a fork of the [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit). It was forked from react-redux-starter-kit at commit [715a9d81fe6a96c6e9892217f56d1f8cf6565dfc](https://github.com/davezuko/react-redux-starter-kit/tree/715a9d81fe6a96c6e9892217f56d1f8cf6565dfc).

Getting Started
---------------

1. Fork the repo to `[your org]` and provide a new `[project name]`
2. `git clone https://github.com/[org]/[project name]`
3. `cd [project name]`
4. Delete the contents of README.md and replace with your own.
5. Open package.json and do a find/replace of `newr-ui-starter-kit` with [project name].
6. Install dependencies
  ```
  npm install
  ```
7. Start webpack
  ```
  npm start
  ```
7. Open `localhost:3000` in your favorite browser
  ```
  open http://localhost:3000
  ```
8. Run the tests in TDD mode (re-run tests every time a file changes)
  ```
  npm run tdd
  ```

You can also just run `npm test` to run the tests once.

### Don't want this starter kit's git history in your project?

Then you should clone the project manually, delete all the git repo data, and create a new repo with a fresh code base.

Commands
-------------------------------------

```bash
npm run build            # creates a production bundle
npm run lint             # run eslint
npm run lint:fix         # attempt to fix lint errors
npm start                # run locally
npm run dev:debug-window # run locally with redux devtools in separate window
npm run dev:no-debug     # run locally with redux devtools disabled
npm test                 # run the tests once
npm run tdd              # run the tests continually (TDD mode)
```

Using the Redux devtools
-------------------------------------

After a successful `npm start`, you have probably noticed the devtools sliding panel hovering over your app. There are several different ways of presenting these devtools:

- Use them as-is if they are not bothering you.
- Open them in a new window with `npm run dev:debug-window`.
  - Note: You will need to enable pop-ups at `localhost:3000` in your browser for this to work. There will be a nasty angry red error until you enable pop-ups.
- Install the [browser extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) (the panel will hide automatically when you have it installed).
- Or just turn off the devtools with `npm run dev:no-debug`.
