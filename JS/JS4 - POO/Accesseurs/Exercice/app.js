class User {
    fullName(name, firstName) {
        this.fullName = `${name} ${firstName}`;

        return this.fullName;
    }

    get profession() {
        console.log('get profession');
        return this._job;
    }

    set profession(job) {
        console.log('set profession');
        this._job = job;
    }
}

let user = new User();
user.fullName('Doe', 'John');
user.profession = 'Développeur';
console.log(user);
console.log(user.profession);
//
