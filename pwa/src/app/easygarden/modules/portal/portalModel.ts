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

export interface SinglePortalModel{
  data: PortalModel
}

export interface DataPortalModel {
  data: PortalModel[]
}