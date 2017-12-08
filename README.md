# react-webpack-hmr-tutorial

## Introduction:
---

HMR is not an easy subject, and might be tricky specially if we want to do it in isomorphic (or universal) application.  

I didn't find a tutorial that explain HMR in a step-by-step way, so I created this tutorial hoping will help the community.  

It is an HMR tutorial from A to Z, including React, and working on Isomorphic React.  

The lessons are as follows:

1. The life without HMR:  
    Describes what problems we have without HMR.

2. Off-the-shelf Webpack-dev-server's HMR:
    Describes how to do HMR with out-of-box webpack-dev-server.  

3. Rebuild client code using webpack in a full stack application:
    Describes how to get webpack rebuild without webpack-dev-server and from inside a NodeJS application.

4. Using HMR for server and client in a full-stack application:
    Describes how to get HMR without webpack-dev-server and from inside a NodeJS application.

5. Using HMR with CSS and other assets:
    Describes how to use webpack and HMR with other resources like css, fonts, ...etc.

6. React and the State problem:
    When using HMR with React, you can hot load changes on UI, but you loose the changes on the state. This example to explain how?

7. React-Hot-Loader to fix HMR for the React Component State:
    When using HMR with React, you can hot load changes on UI, but you loose the changes on the state. This example to explain how?

8. Redux and HMR:
    We are going to use Redux and see how we hot reload the store with HMR.


Still to come in the future:  

**HMR for Isomorphic React**