# ng-add-to-calendar
>Angular library to add custom events to common calendar applications.

## Contents

## <a name="1"></a>1 Project structure
- Library:
    - **src** folder for the classes
    - **public_api.ts** entry point for all public APIs of the package
    - **package.json** _npm_ options
    - **rollup.config.js** _Rollup_ configuration for building the _umd_ bundles
    - **rollup.es.config.js** _Rollup_ configuration for building the _es2015_ bundles
    - **tsconfig-build.json** _ngc_ compiler options for _AoT compilation_
    - **build.js** building process using _ShellJS_
- Testing:
    - **karma.conf.js** _Karma_ configuration that uses _webpack_ to build the tests
    - **spec.bundle.js** defines the files used by _webpack_
- Extra:
    - **tslint.json**  _Angular TSLint Preset_ (_TypeScript_ linter rules with _Codelyzer_)
    - **travis.yml** _Travis CI_ configuration

## <a name="3"></a>3 Testing
The following command runs unit & integration tests that are in the `src` folder: 
```Shell
npm test 
```
or in watch mode:
```Shell
npm test:watch
```
It also reports coverage using _Istanbul_.

## <a name="4"></a>4 Building
The following command:
```Shell
npm run build
```
- starts _TSLint_ with _Codelyzer_ using _Angular TSLint Preset_
- starts _AoT compilation_ using _ngc_ compiler
- creates `dist` folder with all the files of distribution, following _Angular Package Format (APF) v5.0_:
```
└── dist
    ├── bundles
    |   ├── ng-add-to-calendar.umd.js
    |   ├── ng-add-to-calendar.umd.js.map
    |   ├── ng-add-to-calendar.umd.min.js
    |   └── ng-add-to-calendar.umd.min.js.map
    ├── esm5
    |   ├── ng-add-to-calendar.js
    |   └── ng-add-to-calendar.js.map
    ├── esm2015
    |   ├── ng-add-to-calendar.js
    |   └── ng-add-to-calendar.js.map
    ├── src
    |   └── **/*.d.ts
    ├── ng-add-to-calendar.d.ts
    ├── ng-add-to-calendar.metadata.json
    ├── LICENSE
    ├── package.json
    ├── public_api.d.ts
    └── README
```
To test locally the npm package before publishing:
```Shell
npm run pack:lib
```
Then you can install it in an app to test it:
```Shell
npm install [path]ng-add-to-calendar-[version].tgz
```

## <a name="5"></a>5 Publishing
Before publishing the first time:
- you can register your library on [Travis CI](https://travis-ci.org/): you have already configured `.travis.yml` file
- you must have a user on the _npm_ registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish:lib
```

## <a name="6"></a>6 Documentation
To generate the documentation, this uses [compodoc](https://github.com/compodoc/compodoc):
```Shell
npm run compodoc
npm run compodoc:serve 
```

## <a name="7"></a>7 Using the library
### Installing
```Shell
npm install ng-add-to-calendar --save 
```
### Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'ng-add-to-calendar': 'node_modules/ng-add-to-calendar/bundles/ng-add-to-calendar.umd.js'
    }
});
```
#### Angular-CLI
No need to set up anything, just import it in your code.
#### Rollup or webpack
No need to set up anything, just import it in your code.
#### Plain JavaScript
Include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/ng-add-to-calendar/bundles/ng-add-to-calendar.umd.js"></script>
```
and use global `ng.ngAddToCalendar` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.

## <a name="8"></a>8 What it is important to know
1. `package.json`

    * `"main": "./bundles/ng-add-to-calendar.umd.js"` legacy module format 
    * `"module": "./esm5/ng-add-to-calendar.js"` flat _ES_ module, for using module bundlers such as _Rollup_ or _webpack_: 
    [package module](https://github.com/rollup/rollup/wiki/pkg.module)
    * `"es2015": "./esm2015/ng-add-to-calendar.js"` _ES2015_ flat _ESM_ format, experimental _ES2015_ build
    * `"peerDependencies"` the packages and their versions required by the library when it will be installed

2. `tsconfig.json` file used by _TypeScript_ compiler

    * Compiler options:
        * `"strict": true` enables _TypeScript_ `strict` master option

3. `tsconfig-build.json` file used by _ngc_ compiler

    * Compiler options:
        * `"declaration": true` to emit _TypeScript_ declaration files
        * `"module": "es2015"` & `"target": "es2015"` are used by _Rollup_ to create the _ES2015_ bundle

    * Angular Compiler Options:
        * `"skipTemplateCodegen": true,` skips generating _AoT_ files
        * `"annotateForClosureCompiler": true` for compatibility with _Google Closure compiler_
        * `"strictMetadataEmit": true` without emitting metadata files, the library will not be compatible with _AoT compilation_: it is intended to report syntax errors immediately rather than produce a _.metadata.json_ file with errors
        * `"flatModuleId": "@scope/package"` full package name has to include scope as well, otherwise AOT compilation will fail in the consumed application

4. `rollup.config.js` file used by _Rollup_

    * `format: 'umd'` the _Universal Module Definition_ pattern is used by _Angular_ for its bundles
    * `moduleName: 'ng.ngAddToCalendar'` defines the global namespace used by _JavaScript_ apps
    * `external` & `globals` declare the external packages

5. Server Side Rendering

    If you want the library will be compatible with Server Side Rendering:
    * `window`, `document`, `navigator` and other browser types do not exist on the server
    * don't manipulate the _nativeElement_ directly

## License
MIT
