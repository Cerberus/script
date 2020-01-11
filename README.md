## Script

A simple script

### Publish to Github Package Registry

1). Make a version `patch`, `minor` or `major`.
```
npm version patch
```

2). Deploy to CI.
```
git push --follow-tags origin master
```