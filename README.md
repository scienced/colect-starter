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
* Theming: customer specific colors, fonts, dropshadows, borders & radius can be configured in file custom.sass 
* Configuration / setup (endpoint, security & collectionId): tbd

### Test REST API
* Kookbook looks: http://my-json-server.typicode.com/scienced/colect-starter/looks
* Shop-the-look products: http://my-json-server.typicode.com/scienced/colect-starter/shopthelook

### Todo
- [ ] Fullscreen mode
- [ ] Image orientation detection
- [x] Get data from mockup api & use state management (VUEX)
- [ ] Custom styling / themes configuration support
- [ ] Configuration / setup / documentation (via Docusaurus or Gitbook?)
- [ ] Migrate to Bitbucket with Integrated CI/CD 

### Code architecture
![Code buildup](https://images.cmft.io/1115457393585688576/1175318243066388480/1175318243091554304/image.png)
