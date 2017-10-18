# Lesson 4:

## Using HMR with CSS and other assets

## Description: 
How HMR doing with CSS? In this lesson we will do HMR with CSS.

As you know webpack does css handling through module.rules.


### Going through the code:
***


#### webpack.config.js
in the webpack.config.js we add rules to handle css and others:

```javascript
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
},
```

This will process any css that is consumed by our code.

#### src/index.js
we add a reference to css file

```javascript
require('./style.css');
```

We don't need to add any HMR API here, why?  
Because style-loader and css-loader are HMR enabled.



## Test it:
run 
```bash
npm install
# you don't need npm run build, becasue npm start will do it
npm run server
```
Open the page, and you sould see text with color red, and background as an image.  

Now, go the file `style.css` and change the color to blue or something, and nothice the color was changed on the webbrowser without refresh.

## Conclusion:

All assets processors: css, image, fonts are HMR enabled, so we don't want to do anything to wire them.

