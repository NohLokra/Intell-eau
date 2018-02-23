import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, show } from './controller'
export WaterLevel, { schema } from './model'

const router = new Router()

/**
 * @api {get} /water-levels Retrieve water levels
 * @apiName RetrieveWaterLevels
 * @apiGroup WaterLevel
 * @apiUse listParams
 * @apiSuccess {Object[]} waterLevels List of water levels.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /water-levels/:id Retrieve water level
 * @apiName RetrieveWaterLevel
 * @apiGroup WaterLevel
 * @apiSuccess {Object} waterLevel Water level's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Water level not found.
 */
router.get('/:id',
  show)

export default router
