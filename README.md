# [WIP]doconfig-web

![Doconfig Cover](https://raw.githubusercontent.com/yussan/doconfig-web/master/public/images/fb_cover.png)

Web version of doconfig (create config in seconds). Web design check this link https://github.com/idmore/doconfig-design

## Preview
- Live : https://doconfig.byidmore.com/

## Specs :
- VueJS : frontend framework
- Firebase Firestorm : database
- Netlify : cloud storage and host

## Build 
### Development
```
yarn start
```
Run nodemon.
```
yarn build:watch
```
Run webpack watch.

### Production
```
yarn build:prod
```
Build static site for production. Html, js and assets will be located in `dist` directory.
