import { WaterLevel } from '.'

let waterLevel

beforeEach(async () => {
  waterLevel = await WaterLevel.create({ value: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = waterLevel.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(waterLevel.id)
    expect(view.value).toBe(waterLevel.value)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = waterLevel.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(waterLevel.id)
    expect(view.value).toBe(waterLevel.value)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
