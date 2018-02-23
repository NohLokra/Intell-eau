import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export WaterPresence, { schema } from './model'

const router = new Router()
const { value } = schema.tree

/**
 * @api {post} /water-presences Create water presence
 * @apiName CreateWaterPresence
 * @apiGroup WaterPresence
 * @apiParam value Water presence's value.
 * @apiSuccess {Object} waterPresence Water presence's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Water presence not found.
 */
router.post('/',
  body({ value }),
  create)

/**
 * @api {get} /water-presences Retrieve water presences
 * @apiName RetrieveWaterPresences
 * @apiGroup WaterPresence
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} waterPresences List of water presences.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /water-presences/:id Retrieve water presence
 * @apiName RetrieveWaterPresence
 * @apiGroup WaterPresence
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} waterPresence Water presence's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Water presence not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /water-presences/:id Update water presence
 * @apiName UpdateWaterPresence
 * @apiGroup WaterPresence
 * @apiParam value Water presence's value.
 * @apiSuccess {Object} waterPresence Water presence's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Water presence not found.
 */
router.put('/:id',
  body({ value }),
  update)

/**
 * @api {delete} /water-presences/:id Delete water presence
 * @apiName DeleteWaterPresence
 * @apiGroup WaterPresence
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Water presence not found.
 */
router.delete('/:id',
  destroy)

export default router
