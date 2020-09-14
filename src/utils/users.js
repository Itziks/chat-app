const users = []

const addUser = ({ id, username, room }) => {
    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are requird.'
        }
    }

    // Sanitize the data
    username = username.trim().toLowerCase().replace(/\s/g, '')
    room = room.trim().toLowerCase().replace(/\s/g, '')

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are requird.'
        }
    }

    //Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: `Username '${username}' already exists in room '${room}'`
        }
    }

    //Store user
    const user = { id, username, room }
    users.push(user)

    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase().replace(/\s/g, '')
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}