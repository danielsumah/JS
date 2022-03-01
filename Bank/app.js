const users = [
    {
        username: "danielsumah",
        password: "1235"
    },
    {
        username: "danielsumah1",
        password: "1235"
    },
    {
        username: "danielsumah2",
        password: "1235"
    },
    {
        username: "danielsumah3",
        password: "1235"
    },
    {
        username: "danielsumah5",
        password: "1235"
    },
    {
        username: "danielsumah6",
        password: "1235"
    },
    {
        username: "xyz",
        password: "123"
    },
    {
        username: "danielsumah7",
        password: "1235"
    },
    {
        username: "danielsumah8",
        password: "1235"
    },
    {
        username: "danielsumah2",
        password: "1235"
    },
]


const bankDetail = {
    "danielsumah": {
        firstname: "Daniel",
        lastname: "Sumah",
        accountBalance: 5000
    },
    "xyz":{
        firstname: "DaX",
        lastname: "Yuz",
        accountBalance: 7000
    }
}

const getUser = (username, password) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].username == username && users[index].password == password) {
            return true
        }
    }
    return false
}


const getBankDetails = (username) => {
    return bankDetail[username].accountBalance
}



const checkAccountBalance = (username, password) => {
    const isUser = getUser(username, password)
    if (isUser) {
        console.log(getBankDetails(username))
    }
    else {
        console.log("User does not exist")
    }
}

const createNewUser = (username, password) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].username === username) {
            return "This username already exists"
        }
    }
    users.push({username, password})
    return users
}

const updateUserDetails = (username, key, value) => {
    switch (key) {
        case "firstname":
            return {...bankDetail[username], "firstname":value}
        case "lastname":
            return {...bankDetail[username], "lastname":value}
        case "accountBalance":
            return {...bankDetail[username], "accountBalance":value}
    
        default:
            return bankDetail[username]
    }
}

// console.log(getBankDetails('danielsumah'))
// console.log(createNewUser("danielsumah55","765"))
console.log(updateUserDetails('danielsumah', "accountBalance", 6000))