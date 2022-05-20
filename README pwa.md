# DÉMARRAGE
1. &nbsp;&nbsp;*/EasyGardenCDA*
\
Installer Angular =>
```
ng new pwa
```
2. &nbsp;&nbsp;*/EasyGardenCDA/pwa*
\
Lancer serveur local =>
```
ng serve -o
```
```
ng serve -o --port 4200
```
# ENVIRONNEMENT
1. &nbsp;&nbsp;*/EasyGardenCDA/pwa*
\
Installer FontAwesome
```
npm install @fortawesome/fontawesome-svg-core
```
```
npm install @fortawesome/free-solid-svg-icons
```
```
npm install @fortawesome/free-brands-svg-icons
```
```
npm install @fortawesome/angular-fontawesome@0.10.x
```
2. &nbsp;&nbsp;*/EasyGardenCDA/pwa*
\
Installer JWT Decode
```
npm i jwt-decode
```
3. &nbsp;&nbsp;*/EasyGardenCDA/pwa*
\
Installer animate.css
```
npm i animate.css
```
4. &nbsp;&nbsp;*/EasyGardenCDA/pwa*
\
Installer Compodoc
```
npm install -g @compodoc/compodoc
```
- Créer un fichier tsconfig.doc.json à la racine
\
- Copier/Coller dans ce fichier
```
{
  "include": ["src/**/*.ts"],
  "exclude": ["src/test.ts", "src/**/*.spec.ts", "src/app/file-to-exclude.ts"]
}
```
- Se rendre dans le fichier package.json et ajouter à "scripts"
```
"compodoc": "npx compodoc -p tsconfig.doc.json"
```
- Générer doc
```
npm run compodoc
```
- Lancer doc en mode serveur
```
npm run compodoc:serve
```
Url: localhost:8080
- Lancer doc en mode serveur watch
```
npm run compodoc:serve:watch
```
# COMMANDES
1. &nbsp;&nbsp;*/EasyGardenCDA/pwa*
\
Créer component
```
ng g c componentName --skipTests=true
```
\
Créer un service dans un dossier services
```
ng g s services\registerFormValidation --skipTests=true
```
\
Créer module
```
ng g m moduleName --skipTests=true
```
\
Créer routing
```
ng g m moduleName --skipTests=true
```



<!-- # ENVIRONNEMENT
1. Installer Vue CLI
\
Powershell Windows en admin
```
npm install -g @vue/cli
```
2. &nbsp;&nbsp;*/EasyGardenCDA/pwa*
\
Installer Vue Router
```
npm install vue-router@4
```
3. Installer Vuex
\
&nbsp;&nbsp;*/EasyGardenCDA/pwa*
```
npm install vuex@next --save
```
4. Installer Vuex-class
\
&nbsp;&nbsp;*/EasyGardenCDA/pwa*
```
npm install --save vuex-class-component
```
5. Installer Vue-decorator
\
&nbsp;&nbsp;*/EasyGardenCDA/pwa*
```
npm install vue-decorator
```
6. Installer Babel
\
&nbsp;&nbsp;*/EasyGardenCDA/pwa*
```
npm i @vue/cli-plugin-babel
```
7. Installer SASS
\
&nbsp;&nbsp;*/EasyGardenCDA/pwa*
```
npm install -D sass-loader sass
```
8. Installer Font-Awesome
\
&nbsp;&nbsp;*/EasyGardenCDA/pwa*
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/vue-fontawesome@prerelease
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
``` -->