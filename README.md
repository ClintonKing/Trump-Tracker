# Trump-Tracker
An application to track incidents of harassment and violence at Trump rallies. This is a work in progress.

I'm currently struggling to figure out why this won't deploy correctly on Heroku. In the mean time, if you'd like to try the application locally, here are the instructions:

1. Clone the repository and use 'npm install' to install the dependencies.
2. Run 'node index.js'
3. Check localhost:8080 in your browser of choice.

Currently the app is set to use a Mongo database hosted on MongoLab. If you'd prefer to use a local database for whatever reason. Just create one in the Mongo shell and change where the app sources data from in the index.js file. It should be right after the dependency variables are set.

Enjoy!
