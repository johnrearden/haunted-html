console.log('The script has loaded!');

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
            role: 'Author',
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


