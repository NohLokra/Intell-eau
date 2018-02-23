import mongoose, { Schema } from 'mongoose'

const gobletStockSchema = new Schema({
  value: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

gobletStockSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      value: this.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('GobletStock', gobletStockSchema)

export const schema = model.schema
export default model
