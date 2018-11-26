//NodeJS script to convert csv files to JSON
//Iain Laird Dec 2018
//This was created for assignment1 of the Introduction to NodeJS course (Microsoft:DEV283x) on edx.org
//Usage: cd to working directory -> node converter.js <NameofCSVFIle.csv>
//Output .JSON file will have the same name as .csv file


var csv = require('csvtojson')  //import csv to json module (https://www.npmjs.com/package/csvtojson)
const fs = require('fs')      //create files and folders fs - filesystem
const path = require('path')  //work with cross platform file paths

var csvFilePath=process.argv[2] //filepath defined in command line argument as described above

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    fs.writeFileSync(path.join(__dirname, path.parse(csvFilePath).name + '.json'), JSON.stringify(jsonObj,null, "\t"), 'utf8',(error) => {
                if (error) return console.error(error);
            }) //write file with stringified JSON (otherwise it just prints Object) null and \t make the formatting nicer
    console.log('Conversion complete')  //notify user when conversion is complete
})
