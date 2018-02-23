import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { GobletStock } from '.'

const app = () => express(apiRoot, routes)

let gobletStock

beforeEach(async () => {
  gobletStock = await GobletStock.create({})
})

test('POST /goblet-stocks 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ value: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.value).toEqual('test')
})

test('GET /goblet-stocks 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /goblet-stocks/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${gobletStock.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gobletStock.id)
})

test('GET /goblet-stocks/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /goblet-stocks/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${gobletStock.id}`)
    .send({ value: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(gobletStock.id)
  expect(body.value).toEqual('test')
})

test('PUT /goblet-stocks/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ value: 'test' })
  expect(status).toBe(404)
})

test('DELETE /goblet-stocks/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${gobletStock.id}`)
  expect(status).toBe(204)
})

test('DELETE /goblet-stocks/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
