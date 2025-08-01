# Basic setup for a service worker for PWA's


## Content
  * [Brief](#brief)
  * [Features](#features)
  * [How to Use](#how-to-use)
  * [Change Log](#change-log)
  * [ToDo](#todo)


## Brief 
  This contains a basic configuration for a common service worker file. The code can be used for progressive web apps (PWA) to provide all necessary functions.
  In the constants.js file a global APP object is defined, which is also used from the service worker.
  > [!NOTE] 
  > The assets in the <kbd> ASSETS </kbd> array must be adapted to your local projects!


## Features
  * automatical update when a new version is available
  * provides all main events of any service worker
  * uses modern ECMAScript 2017 syntax for promises (async | await)
  * code fully documented in JSDOC notation


## How to use
  Simply copy the code to your project in a seperate service worker file in the root directory.
  > [!NOTE] 
  > To make it work, don't forget to register the service worker in your app.js file!

  [/js/app.js](#app.js)
  

## Change Log
  * V0.0.15
    - first experimental version


## ToDo
  * add push notifications