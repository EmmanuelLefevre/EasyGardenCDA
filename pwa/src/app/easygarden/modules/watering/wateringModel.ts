export interface IWatering {
  id: number,
  name: string,
  flowSensor: string,
  pressureSensor: string,
  status: boolean,
  garden: {
    id: string
  }
}

export interface IDataWatering {
  data: IWatering[]
}

// Ngx-filter
export interface IWateringFilter {
  name: string
}