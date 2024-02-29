require('dotenv').config();
// Export an object containing the configuration settings for the application


module.exports = {
    // Define the app object with properties related to the application's configuration
    app: {
        // Define the port property with a default value of 4000
        // This property represents the port number on which the application will run
        port: process.env.PORT || 4000,
    },
}