const memory = require('./Store')

const Seeders = {
    seed: () => {
        memory.add({
            id: 1,
            name: 'john'
        });

        memory.add({
            id: 2,
            name: 'jehn'
        });

        memory.add({
            id: 3,
            name: 'joe'
        })
    }
}

module.exports = {
    Seeders
};
