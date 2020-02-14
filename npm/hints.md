npm install -h  *quick help -h*
- alternative : isntall or i

npm install http-server -g    - *install globally*

npm ls -g --depth=0  - *display main global packages*

**npm init**   - *generate package.json*
(entry point) - *name of the main file*

**npm init -y** - *generate with default settings*

**npm install** mocha **--save-dev** - *save to devDependencies part of package.json*

"^3.4.1"  - SemVer - *semantic versioning* 
3 - main version of package - some changes need to be done in code
4 - secondary version (usually api not changed);  ^ - last secondary version  
2 - corrections   ~ - last non important version

*install exact version of package*
npm install colors@1.0.0

npm outdated *information obout different packages versions*
npm install

npm update - *update all packages*

npm uninstall colors  - *remove package from project*
npm uninstall mocha --save-dev