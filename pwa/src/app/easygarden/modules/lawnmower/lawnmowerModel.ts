export interface ILawnmower {
  id: number,
  name: string,
  batterySensor: string,
  status: boolean,
  garden: {
    id: string,
    name: string
  }
}

export interface IDataLawnmower {
  data: ILawnmower[]
}

// Ngx-filter
export interface ILawnmowerFilter {
  name: string
}