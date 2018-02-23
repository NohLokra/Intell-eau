import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { WaterPresence } from '.'

const app = () => express(apiRoot, routes)

let userSession, waterPresence

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  userSession = signSync(user.id)
  waterPresence = await WaterPresence.create({})
})

test('POST /water-presences 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ value: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.value).toEqual('test')
})

test('GET /water-presences 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /water-presences 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /water-presences/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${waterPresence.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(waterPresence.id)
})

test('GET /water-presences/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${waterPresence.id}`)
  expect(status).toBe(401)
})

test('GET /water-presences/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /water-presences/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${waterPresence.id}`)
    .send({ value: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(waterPresence.id)
  expect(body.value).toEqual('test')
})

test('PUT /water-presences/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ value: 'test' })
  expect(status).toBe(404)
})

test('DELETE /water-presences/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${waterPresence.id}`)
  expect(status).toBe(204)
})

test('DELETE /water-presences/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
