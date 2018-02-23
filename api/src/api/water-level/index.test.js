import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WaterLevel } from '.'

const app = () => express(apiRoot, routes)

let waterLevel

beforeEach(async () => {
  waterLevel = await WaterLevel.create({})
})

test('GET /water-levels 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /water-levels/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${waterLevel.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(waterLevel.id)
})

test('GET /water-levels/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
