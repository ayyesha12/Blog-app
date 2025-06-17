Frontend:
 setup my project with yarn create vite  'project-name'
 start with yarn dev

 install these packages with : yarn add before starting project 
  "@emotion/react": "^11.11.3",
   "@emotion/styled": "^11.11.0",
   "@mui/icons-material": "^5.15.6",
   "@mui/material": "^5.15.6",
     "axios": "^1.6.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.3"

create accesToken and refreshToken by node terminal with this command
require ('crypto').randomBytes(64).toString('hex')

Backend:

install these packages 
 "bcrypt": "^6.0.0",
    "body-parser": "^2.2.0",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "gridfs-stream": "^1.1.1",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.17.0",
    "mongoose": "^8.15.1",
    "npm": "^11.4.2"

Start you backend with yarn start
Edit this in your package.json server file 
 "scripts": {
    "start": "nodemon index.js"
  },