import { success, notFound } from '../../services/response/'
import { WaterLevel } from '.'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  WaterLevel.find(query, select, cursor)
    .then((waterLevels) => waterLevels.map((waterLevel) => waterLevel.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WaterLevel.findById(params.id)
    .then(notFound(res))
    .then((waterLevel) => waterLevel ? waterLevel.view() : null)
    .then(success(res))
    .catch(next)
