export interface WateringModel {
  id: number,
  name: string,
  flowSensor: string,
  pressureSensor: string,
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

export interface SingleWateringModel{
  data: WateringModel
}

export interface DataWateringModel {
  data: WateringModel[]
}