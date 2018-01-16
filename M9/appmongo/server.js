const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// // UWAGA: ważne jest, aby zmianę referencji promise'a dokonać przed wykonaniem metody .connect().

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongodb', {
	useMongoClient: true
});

const userSchema = new Schema({
	name: String,
	username: { type: String, required: true },
	password: { type: String, required: true },
	admin: Boolean,
	created_at: Date,
	updated_at: Date
});

userSchema.methods.manify = function(next) {
	this.name = this.name + '-boy';

	return next(null, this.name);
};

// //pre-save method
userSchema.pre('save', function(next){

	//pobranie aktualnego czasu
	const currentDate = new Date();

	//zmiana pola na aktualny czas
	this.updated_at = currentDate;

	if(!this.created_at) {
		this.created_at = currentDate;
	}

	// next() jest funkcją ktora przechodzi do nastepnego hooka do wykonania przed lub po po requiscie.
	next();
});

//Tworzenie instancji na podstawie modelu

const User = mongoose.model('User', userSchema);

const kenny = new User({
	name: 'Kenny',
	username: 'Kenny_the_boy',
	password: 'password'
});

kenny.manify(function(err, name){
	if(err) throw err;
	console.log('Twoje nowe imię to: ' + name);
});

kenny.save(function(err){
	if(err) throw err;
	console.log('Uzytkownik ' + kenny.name + ' zapisany pomyslnie');
});


const benny = new User({
	name: 'Benny',
	username: 'Benny_the_boy',
	password: 'pass'
});

benny.manify(function(err, name) {
	if(err) throw err;
	console.log('Twoje nowe imię to: ' + name);
});

benny.save(function(err) {
	if(err) throw err;
	console.log('Uzytkownik ' + benny.name + ' zapisany pomyslnie');
});

const findAllUsers = function() {
    // find all users
    return User.find({}, function(err, res) {
        if (err) throw err;
        console.log('\n\nActual database records are: \n\n\n' + res);
    });
}
//Odnajdywanie rekordu
// User.find({ username: 'Kenny_the_boy' }).exec(function(err, res) {
// 	if(err) throw err;

// 	console.log('Record you are looking for is ' + res);
// });

// //Aktualizacja rekordu 
// User.find({ username: 'Kenny_the_boy' }, function(err, user) {
// 	if(err) throw err;

// 	console.log('Old password is ' + user[0].password);
// 	user[0].password = 'newPassword';
// 	console.log('New password is ' + user[0].password);

// 	user[0].save(function(err){
// 		if(err) throw err;
// 		console.log('Uzytkownik ' + user[0].name + ' zostal pomyslnie zaktualizowany');
// 	});
// });

// Usuwanie dokumentów
// User.find({ username: 'Kenny_the_boy' }, function(err, user){
// 	if(err) throw err;

// 	console.log(user);
// 	user = user[0];
// 	user.remove(function(err){
// 		console.log('User successfully deleted');
// 	});
// });

//Update
// User.findOneAndUpdate({ username: 'Benny_the_boy' }, { password: 'noweHsssaslo' } , function(err) {
//     if (err) throw err;

//     console.log('User updated!');
// });

//Wszystkie zapytania do bazdy działają bez zarzutu.

// const query = User.find({});
// const promise = query.exec();

// promise.then(function(records) {
// 	console.log('Actual database records are ' + records);
// });

// promise.catch(function(reason){
// 	console.log('Something went wrong.', reason);
// });

// const findSpecificRecord = function() {
//     // find specific record
//     return User.find({ username: 'Kenny_the_boy' }, function(err, res) {
//         if (err) throw err;
//         console.log('Record you are looking for is ' + res);
//     })
// }

// const updadeUserPassword = function() {
//     // update user password
//     return User.findOne({ username: 'Kenny_the_boy' })
//         .then(function(user) {
//             console.log('Old password is ' + user.password);
//             console.log('Name ' + user.name);
//             user.password = 'newPassword';
//             console.log('New password is ' + user.password);
//             return user.save(function(err) {
//                 if (err) throw err;

//                 console.log('Uzytkownik ' + user.name + ' zostal pomyslnie zaktualizowany');
//             })
//         })
// }

// const updateUsername = function() {
//     // update username
//     return User.findOneAndUpdate({ username: 'Benny_the_boy' }, { username: 'Benny_the_man' }, function(err, user) {
//         if (err) throw err;

//         console.log('Nazwa uzytkownika po aktualizacji to ' + user.username);
//     })
// }

// const findMarkAndDelete = function() {
//     // find specific user and delete
//     return User.findOne({ username: 'Mark_the_boy' })
//         .then(function(user) {
//             return user.remove(function() {
//                 console.log('User successfully deleted');
//             });
//         })
// }

// const findKennyAndDelete = function() {
//     // find specific user and delete
//     return User.findOne({ username: 'Kenny_the_boy' })
//         .then(function(user) {
//             return user.remove(function() {
//                 console.log('User successfully deleted');
//             });
//         });
// }

// const findBennyAndRemove = function() {
//     // find specific user and delete
//     return User.findOneAndRemove({ username: 'Benny_the_man' })
//         .then(function(user) {
//             return user.remove(function() {
//                 console.log('User successfully deleted');
//             });
//         });
// }

Promise.all([kenny.save(), benny.save()])
    .then(findAllUsers)
    // .then(findSpecificRecord)
    // .then(updadeUserPassword)
    // .then(updateUsername)
    // .then(findMarkAndDelete)
    // .then(findBennyAndRemove)
    .catch(console.log.bind(console))