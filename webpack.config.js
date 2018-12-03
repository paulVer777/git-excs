//// 1 define entry and output point //// output - one big js file that contains everything our app needs to run


// module.exports, webpack is going to grab this file, its going to run it and its going to have acces to
// whatever we put on this object
//its a way of exposing something in this case an object to another file

// __dirname - variable that contains the absolute path to current location in our situation its indecision app project folder
//  /home/p/Nauka/ReactwithAndy/indecision app 

const path = require('path') //module for paths manipulations

// path.join(__dirname,'public') - function that concatenate paths  

// the basic webpack config includes the module bundler
//that allows us to break up our apps into multiple files (es6 modules supported)

module.exports = {
entry:'./src/app.js',
output:{
    path:path.join(__dirname,'public'), // where the output should be  placed, it need to be absolute path
    filename:'bundle.js' // name of a output file
},
//Setting the loader
//Loader - way to define how a file gets transformed when webpack uses it
// for example any time webpack sees app.js file we can do something with that file like for exapmle 
// run it through babel ( converting es6 to es5 and jsx to regular react create elements calls in order to browsers understands it)

module:{
    rules:[{ //array of rules, for now we just want the babel running, later we will add more like sass etc
        loader:'babel-loader', // name of loader
        test: /\.js$/, // what files do we actually want to run this loader on (we want run only on js files ) | run babel every time webpack see js file we wrote
        exclude: /node_modules/ //excludes a given set of files that we dont want to run loader on
    },
    //whenever you see a js file that is not located on node modules go ahead and run it through babel
    // so that includes our entry file and any files that app js imports


    //CSS - 
    {
        // ?- it makes 's' letter optional so now webpack can handle css and scss (needed to normalize css)
      test:/\.s?css$/, // target all files that ends ($) with .css . Every time webpack meet the scss file its going to load that file (css loader),compile to sass ()
       //and dump its content int a DOM in a style tag (style-loader)
      use:[ // use alows us to provide us arrays of loaders
        'style-loader',
        'css-loader',
        'sass-loader' // behind scenes sass loader uses node-sass to convert file to css
        ]
       //steps: 
       //1. get the code
       //2. convert scss to css
       //3. get it shwoing up in the browser by dumping it into a style tag(head)  
    }
]
},
devtool:'cheap-module-eval-source-map', //figures out where the original line was, makes debuggin way faster ( after transpilling process  )

devServer:{
contentBase:path.join(__dirname,'public'), // absolute path to public folder where index html lives, 
historyApiFallback:true // this tells the dev server that we are going to handle routing via our client side code
// 404 will fallback to index.html
}}


