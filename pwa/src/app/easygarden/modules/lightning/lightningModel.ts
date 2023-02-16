export interface ILightning {
  id: number,
  name: string,
  status: boolean,
  garden: {
    id: string
  }
}

export interface IDataLightning {
  data: ILightning[]
}

// Ngx-filter
export interface ILightningFilter {
  name: string
}