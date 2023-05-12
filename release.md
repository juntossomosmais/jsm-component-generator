# Release

## Creating a new package
0. if a `dist/` doesn't exist, create it.
1. update package.json version number
2. run `yarn compile` 
3. run `yarn generate`
a file `jsm-generator-x.y.z.vsix` will be generate at dist folder

## Publishing
You must have access on [Markeplace](ttps://marketplace.visualstudio.com/manage/publishers/JuntosSomosMais)

1. Click on the 3 dots aside of JS+ Generator name
2. Click on `Update` actions
3. Select the `jsm-generator-x.y.z.vsix`
4. await a couple of minutos and a new version is on