import { GobletStock } from '.'

let gobletStock

beforeEach(async () => {
  gobletStock = await GobletStock.create({ value: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = gobletStock.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gobletStock.id)
    expect(view.value).toBe(gobletStock.value)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = gobletStock.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gobletStock.id)
    expect(view.value).toBe(gobletStock.value)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
