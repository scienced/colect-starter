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
* **Parent theming** : by setting CSS variables in the server generated html, a style can be pushed from the parent html container. Use other names than the standard Bootstrap CSS variables, because these are overwriten at run time. See example of setting a CSS variable:
```
<style>
:root {
  --colect-blue: #007bff;
}
</style>
```
* **Initial variables setup** (i18n locale, api base url, securitytoken & collectionId). Insert script below into the server generated html to pass initial variables into application.
```
<script id="config" type="application/json">{"locale":"en","baseURL":"https:\/\/my-json-server.typicode.com/scienced/colect-starter","sessionid":"1234339978", "collectionid":"32763"}
</script>
```

### Test REST API
* Lookbook looks: https://my-json-server.typicode.com/scienced/colect-starter/looks
* Shop-the-look products: https://my-json-server.typicode.com/scienced/colect-starter/shopthelook
Lookbook images measurements are ipad 3 or higher: at least 1536 * 2048 (w * h) pixels


### Todo
- [ ] Fullscreen mode (seperate component)
- [ ] Automatic image orientation 
- [X] Get data from mockup api & use state management (VUEX)
- [x] Custom SCSS styling support
- [X] Configuration / initial setup 
- [x] i18n multi language support

### Code architecture
![Code buildup](https://images.cmft.io/1115457393585688576/1175318243066388480/1175318243091554304/image.png)
