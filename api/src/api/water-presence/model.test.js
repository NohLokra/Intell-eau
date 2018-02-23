import { WaterPresence } from '.'

let waterPresence

beforeEach(async () => {
  waterPresence = await WaterPresence.create({ value: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = waterPresence.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(waterPresence.id)
    expect(view.value).toBe(waterPresence.value)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = waterPresence.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(waterPresence.id)
    expect(view.value).toBe(waterPresence.value)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
