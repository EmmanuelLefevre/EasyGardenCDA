export interface GardenModel {
  id: number,
  name: string,
  user: {
    id: string,
    pseudo: string
  }
}

export interface DataGardenModel {
  data: GardenModel[]
}

// Ngx-filter
export interface GardenFilterModel {
  name: string
}