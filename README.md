#Steps to reproduce
1. Run `yarn test` to see that the Cucumber CLI runner successfully recognizes steps
   1. This is equivalent to `cucumber-js feature/*.feature -r steps`
2. Run `yarn test-fork` to see that when running the Cucumber command via forking the Cucumber process in `runner.js`, Cucumber fails to recognize the steps.
3. This is the issue we are facing and the failure _does not_ happen on `minimatch@3.0.4`
4. This is proved by doing the following:

##Steps to resolve
1. Add the following block to package JSON
```
"resolutions": {
    "minimatch": "3.0.4"
}
```
2. Use `yarn` to force the resolution
3. Run `yarn test-fork` to see that everything runs successfully and the steps are recognized.

   