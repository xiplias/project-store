import Nedb from 'nedb'
import path from 'path'

const remote = require('electron').remote
const app = remote.app
const db = new Nedb({
  filename: path.join(app.getPath('userData'), 'library.db'),
  autoload: true
})

export default db

export function updateDoc (id, valueName, val, cb) {
  db.update({ _id: id }, { $set: { [valueName]: val, updatedAt: new Date() } }, { upsert: true }, cb)
}
