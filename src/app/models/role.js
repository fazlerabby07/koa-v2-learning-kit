import orm from './_bookshelf';
import Checkit from 'checkit';

const validationRules = new Checkit({
    name: ['required', 'maxLength:20', 'minLength:2']
});

const Role = orm.Model.extend({

    tableName: 'roles',
    hasTimestamps: true,
    hidden: ['created_at', 'updated_at', 'deleted_at'],

    initialize: function() {
        this.on('saving', this.validate);
    },

    validate: function() {
        return validationRules.run(this.attributes);
    }

});

const RoleFactory = {
    all: function() {
        return Role.collection()
            .query('where', 'status', '=', 1)
            .fetch()
            .then(function(data) {
                return [200, data];
            })
            .catch(function(err) {
                return [403, err];
            });
    },

    insert: function(role) {
        return Role.forge(role)
            .save()
            .then(function(validated) {
                return [200, validated];
            }).catch(function(err) {
                return [403, err];
            });
    },

    update: function(id, role) {
        return Role.forge({id})
            .save(role)
            .then(function(validated) {
                return [200, validated];
            })
            .catch(function(err) {
                return [403, err];
            });
    },

    delete: function(id) {
        return Role.forge({id})
            .destroy()
            .then(function() {
                return [200, 'Delete succesfully'];
            })
            .catch(function(err) {
                return [403, err];
            });
    }
};

export default {
    RoleFactory,
    Role: orm.model('Role', Role)
};
