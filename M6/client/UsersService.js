class UserService {
    constructor(){
        this.users = [];
    }
    getAllusers() {
        return this.users;
    }
    getUserById(userId) {
        return this.users.find(user => user.id === userId);
    }
    addUser(user) {
        this.users = [user, ...this.user];
    }
    removeUser(userId) {
        this.users = this.user.filter(user => user.id !== userId);
    }
}

module.exports = UsersService;
