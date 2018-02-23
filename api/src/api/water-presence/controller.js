import { success, notFound } from '../../services/response/'
import { WaterPresence } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WaterPresence.create(body)
    .then((waterPresence) => waterPresence.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  WaterPresence.find(query, select, cursor)
    .then((waterPresences) => waterPresences.map((waterPresence) => waterPresence.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WaterPresence.findById(params.id)
    .then(notFound(res))
    .then((waterPresence) => waterPresence ? waterPresence.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WaterPresence.findById(params.id)
    .then(notFound(res))
    .then((waterPresence) => waterPresence ? Object.assign(waterPresence, body).save() : null)
    .then((waterPresence) => waterPresence ? waterPresence.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WaterPresence.findById(params.id)
    .then(notFound(res))
    .then((waterPresence) => waterPresence ? waterPresence.remove() : null)
    .then(success(res, 204))
    .catch(next)
