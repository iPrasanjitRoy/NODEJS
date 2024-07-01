/* 

🖥️ 👉 In Json, Multi-line Comments Are Not Directly Supported As They Are In Programming Languages Like Javascript Or Python.  

🖥️ 👉 Build Configuration For Serverless Function Handling   
            "builds": [
                        {
                        "src": "index.js",  🖥️ 👉Entry Point For Serverless Functions 
                        "use": "@vercel/node"  🖥️ 👉 Use @vercel/node Runtime Environment 
                        },
                        🖥️ 👉  Configuration For Static Assets Handling 
                        {
                        "src": "build/**",     🖥️ 👉 All Files In The Build Directory 
                        "use": "@vercel/static" 🖥️ 👉  Use @vercel/static Handler For Static Assets 
                        }
            ],
            "routes": [
                        {
                        "src": "/products",    🖥️ 👉  Requests To /products 
                        "dest": "index.js"    🖥️ 👉  Direct To Serverless Function In Index.js 
                        },
                        {
                        "src": "/products/(.*)",    🖥️ 👉  Requests To /products/{subpath} 
                        "dest": "index.js"
                        },
                        {
                        "src": "/add",               🖥️ 👉 Requests To /add 
                        "dest": "build/index.html"   🖥️ 👉  Serve Build/index.html 
                        },
                        {
                        "src": "/",                 🖥️ 👉    Requests To The Root Path 
                        "dest": "build/index.html"
                        },
                        {
                        "src": "/(.+)",       🖥️ 👉    Any Other Path  
                        "dest": "build/$1"     🖥️ 👉  Serve Corresponding File In Build Directory 
                        }
                     ],
    🖥️ 👉       
*/