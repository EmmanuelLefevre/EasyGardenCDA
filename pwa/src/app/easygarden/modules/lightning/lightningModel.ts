export interface LightningModel {
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

export interface DataLightningModel {
  data: LightningModel[]
}

// Ngx-filter
export interface LightningFilterModel {
  name: string
}