# Lookbook poc
VueJs component build with BootstrapVue for lookbook & shop the look functionality via rest api. Can easily be integrated in legacy (server generated) html pages. 

[Demo](https://wizardly-agnesi-24855a.netlify.com/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
* **Theming:** customer specific colors, fonts, dropshadows, borders & radius can be configured in assets/custom-vars.scss. Changes effected at buildtime. 
* **Initial variables setup** (i18n locale, api base url, securitytoken & collectionId). Load the initial variables by passing props into the wrapper application.
```
<div id="app" locale="fr" baseURL="https:\/\/my-json-server.typicode.com/scienced/colect-starter" sessionid="1234339978" collectionid="32763"></div>
```

### Test REST API
* Lookbook looks: https://my-json-server.typicode.com/scienced/colect-starter/looks
* Shop-the-look 3 products: https://my-json-server.typicode.com/scienced/colect-starter/shopthelook1
* Shop-the-look 7 products: https://my-json-server.typicode.com/scienced/colect-starter/shopthelook2

### Vue wrapper setup
The wrapper application loads the bootstrapVue libaries (in app.vue)
Setup of i18n




### Todo
- [ ] Fullscreen mode (seperate component)
- [ ] Automatic image orientation 
- [ ] Better preview grid
- [X] Get data from mockup api & use state management (VUEX)
- [x] Custom SCSS styling support
- [X] Configuration / initial setup 
- [x] i18n multi language support
- [x] video support
- [x] scroll snap added

### Code architecture
![Code buildup](https://images.cmft.io/1115457393585688576/1175318243066388480/1175318243091554304/image.png)
