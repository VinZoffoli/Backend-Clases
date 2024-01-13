const UserManager = require("./class/user-manager.class")

const userManager = new UserManager();

const newUser = {
    name: 'Mate',
    lastname: 'Naran',
    username: 'matenaran',
    password: '123'
}
userManager.Manager.createUser(newUser);