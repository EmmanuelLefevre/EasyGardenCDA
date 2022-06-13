export interface GardenModel {
  id: number,
  name: string,
  user: {
    id: string,
    name: string
  }
}

export interface DataGardenModel {
  data: GardenModel[]
}