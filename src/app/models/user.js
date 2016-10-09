import orm from './_bookshelf';
import Checkit from 'checkit';
// Model
const validationRules = new Checkit({
    user_name: 'required',
    email: ['required', 'email', function(val) {
        return User.query(function(q) {
            q.where('email', '=', val);
        })
        .fetch()
        .then(function(res) {
            // if email is new then res wil be null.
            if ( res !== null ) {
                throw new Error('The email address is already in use.');
            }
        });
    }],
    password: 'required',
    profile_pic_url: 'required'
});


const User = orm.Model.extend({

    tableName: 'users',
    hasTimestamps: true,
    hidden: ['created_at', 'updated_at', 'deleted_at'],

    initialize: function() {
        this.on('saving', this.validate);
    },
    validate: function() {
        return validationRules.run(this.attributes);
    }
});
// Factory methods
const UserFactory = {

    all: () => User.collection()
        .query('where', 'status', '=', '1')
        .fetch()
        .then(data => [200, data])
        .catch(err =>[403, err]),

    insert: user => User.forge(user)
        .save()
        .then(validated => [200, validated])
        .catch(err => [403, err]),

    userExist: user =>
        User.query(function(q) {
            q.where('email', '=', user.email);
            q.andWhere('password', '=', user.password);
            q.select('id', 'email', 'user_name', 'first_name', 'last_name', 'status', 'profile_pic_url', 'role_id');
        })
        .fetch()
        .then(data => data ? [200, data.toJSON()] : [403, 'username or password not matched!!!'])
        .catch(err => [403, err])
};

// Exports
export default {
    User: orm.model('User', User),
    UserFactory
};
