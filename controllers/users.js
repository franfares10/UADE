const UserSerice = require('../services/users');

const getUsers = async (req, res) => {
    try{
        const users = await UserSerice.getUsers();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const createUser = async (req, res) => {
    try{
        const user = await UserSerice.createUser(req.body);
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getUsers,
    createUser,
};