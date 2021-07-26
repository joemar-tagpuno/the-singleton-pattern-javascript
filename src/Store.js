class Store {
    constructor() {
        if(! Store.instance) {
            this._collection = [];
            Store.instance = this;
        }

        return Store.instance;
    }

    add(doc) {
        this._collection.push(doc);
    }

    get(id) {
        return this._collection.find(doc => doc.id === id);
    }

    delete(id) {
        let i = this._collection.findIndex((doc) => doc.id === id);

        if (~i) {
            this._collection[i] = {...this._collection[i], deleted: true};
            return this._collection[i]
        }

        return undefined;
    }
}

const instance = new Store();

// Freeze Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
Object.freeze(instance);

module.exports = instance;
