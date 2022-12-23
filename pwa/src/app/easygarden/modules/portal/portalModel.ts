export interface PortalModel {
  id: number,
  name: string,
  presenceSensor: string,
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

export interface DataPortalModel {
  data: PortalModel[]
}

// Ngx-filter
export interface PortalFilterModel {
  name: string
}