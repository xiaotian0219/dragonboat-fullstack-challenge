import Projects from 'db/projects'
import Service from '../utils/Service'

import ObjectDoesNotExistError from '../utils/exceptions/ObjectDoesNotExistError'

export default class extends Service {
  getOne = (id) => {
    const project = Projects.findOne({ id })
    if (!project) throw new ObjectDoesNotExistError()

    return project
  }

  getAll = () => {
    return Projects.findAll()
  }

  create = (attributes) => {
    const project = Projects.create(attributes)

    return project
  }

  update = (id, attributes) => {
    let project = Projects.findOne({ id })
    if (!project) throw new ObjectDoesNotExistError()

    project = Projects.update(id, attributes)

    return project
  }

  destroy = (id) => {
    const project = Projects.findOne({ id })
    if (!project) throw new ObjectDoesNotExistError()

    return Projects.destroy(id)
  }
}
