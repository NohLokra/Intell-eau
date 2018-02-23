import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export GobletStock, { schema } from './model'

const router = new Router()
const { value } = schema.tree

/**
 * @api {post} /goblet-stocks Create goblet stock
 * @apiName CreateGobletStock
 * @apiGroup GobletStock
 * @apiParam value Goblet stock's value.
 * @apiSuccess {Object} gobletStock Goblet stock's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goblet stock not found.
 */
router.post('/',
  body({ value }),
  create)

/**
 * @api {get} /goblet-stocks Retrieve goblet stocks
 * @apiName RetrieveGobletStocks
 * @apiGroup GobletStock
 * @apiUse listParams
 * @apiSuccess {Object[]} gobletStocks List of goblet stocks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /goblet-stocks/:id Retrieve goblet stock
 * @apiName RetrieveGobletStock
 * @apiGroup GobletStock
 * @apiSuccess {Object} gobletStock Goblet stock's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goblet stock not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /goblet-stocks/:id Update goblet stock
 * @apiName UpdateGobletStock
 * @apiGroup GobletStock
 * @apiParam value Goblet stock's value.
 * @apiSuccess {Object} gobletStock Goblet stock's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goblet stock not found.
 */
router.put('/:id',
  body({ value }),
  update)

/**
 * @api {delete} /goblet-stocks/:id Delete goblet stock
 * @apiName DeleteGobletStock
 * @apiGroup GobletStock
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Goblet stock not found.
 */
router.delete('/:id',
  destroy)

export default router
