## Script ![Publish](https://github.com/Cerberus/script/workflows/Publish/badge.svg)

A simple script

### Publish to Github Package Registry

1). Make a `patch` version (For `minor` or `major`. Please do it manually).
```
yarn deploy
```

2). Deploy to CI.
```
git push origin master
```