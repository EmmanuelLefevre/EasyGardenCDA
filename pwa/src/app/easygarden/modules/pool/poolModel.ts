export interface PoolModel {
  id: number,
  name: string,
  status: boolean,
  garden: {
    id: string,
    name: string,
    user: {
      id: string,
      name: string
    }
  }
}

export interface DataPoolModel {
  data: PoolModel[]
}