exports.seed = function(knex) {
        // Deletes ALL existing entries
    return knex('roles').del()
        .then(function() {
                // Inserts seed entries
            return knex('roles').insert( [
                    {id: 1, name: 'admin', status: 1},
                    {id: 2, name: 'users', status: 1},
                    {id: 3, name: 'guest', status: 1},
                    {id: 4, name: 'journalist', status: 1},
                    {id: 5, name: 'normal', status: 1}
            ]);
        })
        .then(function() {
                // Deletes ALL existing entries
            return knex('users').del();
        })
        .then(function() {
                // Inserts seed entries
            return knex('users').insert([
                {
                    id: 1,
                    email: 'test1@gmail.com',
                    user_name: 'fazle07',
                    password: '12345',
                    first_name: 'fazle',
                    last_name: 'rabby',
                    gender: 'male',
                    about_me: 'This is test1',
                    status: 1,
                    profile_pic_url: 'upload_file/profile_pic/001.jpg',
                    role_id: knex.select('id').from('roles').orderByRaw('rand()').limit(1)
                },
                {
                    id: 2,
                    email: 'test2@gmail.com',
                    user_name: 'waliuer07',
                    password: '12345',
                    first_name: 'waliur',
                    last_name: 'rahman',
                    gender: 'male',
                    about_me: 'his is test2',
                    status: 1,
                    profile_pic_url: 'upload_file/profile_pic/002.jpg',
                    role_id: knex.select('id').from('roles').orderByRaw('rand()').limit(1)
                },
                {
                    id: 3,
                    email: 'test3@gmail.com',
                    user_name: 'rajib07',
                    password: '12345',
                    first_name: 'rajib',
                    last_name: 'gosh',
                    gender: 'male',
                    about_me: 'This is test3',
                    status: 1,
                    profile_pic_url: 'upload_file/profile_pic/003.jpg',
                    role_id: knex.select('id').from('roles').orderByRaw('rand()').limit(1)
                }
            ]);
        });
};


// exports.seed should be only one time in each file because this
// file is called/'required' dynamically ifrom consoleafter running seed co
