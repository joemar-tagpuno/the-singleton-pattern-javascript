const { Seeders } = require('./Service');
const memory = require('./Store')

beforeAll(() => {
    Seeders.seed();
});

test("Test get doc from memory with ID of 3", () => {
    expect(require('./Store').get(3).name).toBe('joe')
});

test("Test get undefined doc from memory", () => {
    expect(require('./Store').get(10)).toBeUndefined()
});

test("Test delete doc from memory", () => {
    expect(memory.delete(3).deleted).toBeTruthy()
});

test("Test delete undefined doc from memory", () => {
    expect(memory.delete(10)).toBeUndefined()
});
