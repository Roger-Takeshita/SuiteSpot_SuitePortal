import User from '../../models/user';
import Request from '../../models/request';
const ObjectID = require('mongodb').ObjectID;

type ObjectID = typeof import('mongodb').ObjectID;

class UserClass {
    _id: ObjectID;
    email: string;
    password: string;

    constructor(protected readonly _email: string, _password: string) {
        this._id = new ObjectID();
        this.email = _email;
        this.password = _password;
    }
}

const user1 = new UserClass('your_email_1@test.com', '123456');

const setupDatabase = async () => {
    await User.deleteMany({});
    await Request.deleteMany({});
    await new User(user1).save();
};

export { user1, setupDatabase };
