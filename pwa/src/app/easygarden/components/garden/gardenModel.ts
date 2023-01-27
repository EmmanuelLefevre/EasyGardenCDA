export interface IGarden {
  id: number,
  name: string,
  user: {
    id: string
  }
}

export interface IDataGarden {
  data: IGarden[]
}

// Ngx-filter
export interface IGardenFilter {
  name: string
}