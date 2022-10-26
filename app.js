const mongoose = require('mongoose');

const connect = async () => {
    const url = 'mongodb://localhost:27017/testDB';
    await mongoose.connect(url);
    
    const personSchema = mongoose.Schema({
        firstName: 'String',
        lastName: 'String',
        dob: 'String'
    });

    personSchema.methods.fullName = function fullName() {
        const fullName = `${this.firstName && this.firstName}  ${this.lastName && this.lastName}`;

        return fullName;
    };

    const Person = mongoose.model('Person', personSchema);

    const kachi = new Person({
        firstName: 'Kachi',
        lastName: 'Kachi',
        dob: 'March 1905'
    });
    //await kachi.save();
    const persons = await Person.find();
    mongoose.connection.close();
    for(const person of persons)
    console.log(person.firstName);
}

connect().catch(err => console.log(err));

