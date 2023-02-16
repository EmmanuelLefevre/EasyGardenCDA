export interface IPool {
  id: number,
  name: string,
  status: boolean,
  garden: {
    id: string
  }
}

export interface IDataPool {
  data: IPool[]
}

// Ngx-filter
export interface IPoolFilter {
  name: string
}