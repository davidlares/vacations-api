/**
 * Setup the Database URL
 */

 // mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority

const DB_USER = "[YOUR_USERNAME]"
const DB_PASSWORD = "[YOUR_PASSWORD]"
const DB_NAME = "[YOUR_NAME]"
const CLUSTER_HOST = "[MONGO_HOST]"

// Setup the DB URI
exports.DB_URI= "mongodb://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME
