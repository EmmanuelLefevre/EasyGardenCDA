export interface LawnmowerModel {
  id: number,
  name: string,
  batterySensor: string,
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

export interface DataLawnmowerModel {
  data: LawnmowerModel[]
}

// Ngx-filter
export interface LawnmowerFilterModel {
  name: string
}