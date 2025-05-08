const getUsers = (req, res) => {
    res.send("Fetching all users.")
}

const getUserById = (req, res)=>{
    const userId = req.params.id;
    res.send(`Fetching user with User ID: ${userId}`);
}

const postUsers = (req, res)=>{
    res.send(`Adding a new user`);
}

module.exports = {
    getUsers,
    getUserById,
    postUsers
}