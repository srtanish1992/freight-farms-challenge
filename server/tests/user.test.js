const request = require('supertest');
const app = require('../app');
const User = require('../models/user');

const userOne = {
    email: 'anish2@test.com',
    password: 'MyPass1234'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('should signup a new user', async () => {
    await request(app).post('/signup').send({
        email: 'anish1@test.com',
        password: 'MyPass123'
    }).expect(201)
})

test('should login existing user', async () => {
    await request(app).post('/signin').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not login nonexisting user', async () => {
    await request(app).post('/signin').send({
        email: userOne.email,
        password: 'thisisnotpass'
    }).expect(401)
})