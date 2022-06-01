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

export interface SinglePoolModel{
  data: PoolModel
}

export interface DataPoolModel {
  data: PoolModel[]
}