import ProjectsService from './projects.service'

export default class {
  getOne = (id) => {
    const service = new ProjectsService()

    return service.getOne(id)
  }

  get = () => {
    const service = new ProjectsService()

    return service.getAll()
  }

  create = (attributes) => {
    const service = new ProjectsService()

    return service.create(attributes)
  }

  update = (id, attributes) => {
    const service = new ProjectsService()

    return service.update(id, attributes)
  }

  destroy = (id) => {
    const service = new ProjectsService()

    return service.destroy(id)
  }
}
