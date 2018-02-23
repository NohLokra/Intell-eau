import mongoose, { Schema } from 'mongoose'

const waterPresenceSchema = new Schema({
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

waterPresenceSchema.methods = {
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

const model = mongoose.model('WaterPresence', waterPresenceSchema)

export const schema = model.schema
export default model
