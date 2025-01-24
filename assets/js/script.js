console.log('The script has loaded!');

const obj = {
    months: [
        "january", "february", "march", "april", "may", "june"
    ]
}



// Add any month whose name is longer than four letters to the results array.
function filterMonths() {

    // Create an empty array to hold the months
    const results = [];

    for (let item of obj.months) {
        // Choose item that has more than four letters
        if (item.length > 4) {

            // Add it to the results array 
            results.push(item);
        }
        
    }

    return results;
}

const filteredMonths = filterMonths();
console.log(filteredMonths);









































// Here's our data:
const data = {
    header: 'This is the header',
    files: ['january.txt', 'february.txt', 'march.txt', 'april.txt', 'may.txt', 'june.txt'],
    users: [
        { 
            name: 'Chris', 
            role: 'Author',
            allottedMonth: 'January'
        },
        {
            name: 'Joanna',
            role: 'Editor',
            allottedMonth: 'March'
        },
        {
            name: 'Bobby',
            role: 'Admin',
            allottedMonth: 'June'
        }
    ]
}

function getFilesForUser(user) {
    let filename;
    for (let user of data.users) {
        if (user.name === user) {
            filename = user.allottedMonth;
        }
    }
    return filename;
}

function getFilesForRole(role) {
    let files = [];
    for (let user of data.users) {
        if (user.role === role) {
            files.push(getFileNameForMonth(user.allottedMonth));
        }
    }
    return files;
}

// A function that takes a month and returns the file name for that month
function getFileNameForMonth(month) {
    return month.toLowerCase() + '.txt';
}


