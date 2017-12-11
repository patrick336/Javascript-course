// Serwis obsługujący użytkowników
// Zarządzanie użytkownikami korzystającymi w danej chwili z czatu

class UserService {
    constructor(){
        this.users = [];
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(userId) {
        return this.users.find(user => user.id === userId);
    }
    addUser(user) {
        this.users = [user, ...this.users];
    }
    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }
    //for debug
    printusers() {
        this.users.map((user) => {
            console.log(user);
        });
    }
}

module.exports = UserService;
