// This model mocks a real database model for the sake com simplicity
const data = [
  {
    id: 1,
    title: 'Project 1',
    author: 'Author 1',
    start_date: '2021-05-01T00:00:00',
    end_date: '2021-06-01T00:00:00',
  },
  {
    id: 2,
    title: 'Project 2',
    author: 'Author 2',
    start_date: '2021-05-02T00:00:00',
    end_date: '2021-06-02T00:00:00',
  },
  {
    id: 3,
    title: 'Project 3',
    author: 'Author 3',
    start_date: '2021-05-03T00:00:00',
    end_date: '2021-06-03T00:00:00',
  },
  {
    id: 4,
    title: 'Project 4',
    author: 'Author 4',
    start_date: '2021-05-04T00:00:00',
    end_date: '2021-06-04T00:00:00',
  },
  {
    id: 5,
    title: 'Project 5',
    author: 'Author 5',
    start_date: '2021-05-05T00:00:00',
    end_date: '2021-06-05T00:00:00',
  },
]

export default class {
  // receives conditions like { title: 'Project 5' } and returns a list of matches
  static findAll = (conditions = {}) => {
    return data
      .filter((obj) =>
        Object.entries(conditions).reduce((curr, [key, condition]) => {
          if (!curr) return false
          return obj[key] === condition
        }, true)
      )
      .sort((a, b) => (a.id > b.id ? 1 : -1))
  }

  // receives conditions like { title: 'Project 5' } and returns the first match
  static findOne = (conditions = {}) => {
    return data.find((obj) =>
      Object.entries(conditions).reduce((curr, [key, condition]) => {
        if (!curr) return false
        return obj[key] === condition
      }, true)
    )
  }

  static create = (attributes) => {
    let id = 1
    if (data && data.length > 0) {
      const project = data[data.length - 1]
      id = project.id + 1
    }

    const obj = {
      id,
      ...attributes,
    }
    data.push(obj)
    return obj
  }

  static update = (id, attributes) => {
    const obj = data.find((obj) => obj.id === id)
    Object.assign(obj, attributes)

    return obj
  }

  static destroy = (id) => {
    const index = data.findIndex((obj) => obj.id === id)
    data.splice(index, 1)
    return true
  }

  // You can add more methods to this mock to extend its functionality or
  // rewrite it to use any kind of database system (eg. mongo, postgres, etc.)
  // it is not part of the evaluation process
}
