import { success, notFound } from '../../services/response/'
import { GobletStock } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  GobletStock.create(body)
    .then((gobletStock) => gobletStock.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  GobletStock.find(query, select, cursor)
    .then((gobletStocks) => gobletStocks.map((gobletStock) => gobletStock.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  GobletStock.findById(params.id)
    .then(notFound(res))
    .then((gobletStock) => gobletStock ? gobletStock.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  GobletStock.findById(params.id)
    .then(notFound(res))
    .then((gobletStock) => gobletStock ? Object.assign(gobletStock, body).save() : null)
    .then((gobletStock) => gobletStock ? gobletStock.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  GobletStock.findById(params.id)
    .then(notFound(res))
    .then((gobletStock) => gobletStock ? gobletStock.remove() : null)
    .then(success(res, 204))
    .catch(next)
