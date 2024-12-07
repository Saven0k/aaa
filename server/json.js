// import data from './adminData/data.json'
const fs = require('fs')
/**
 * // Function to return data from a json file.
 * @returns list: A list of data;
 */
async function getData() {
    try {
        if (data) {
            return data
        } else {
            return false;
        }

    } catch(error) {
        console.log(error);
        return false;
    }
};
module.exports = {
    getData,
};