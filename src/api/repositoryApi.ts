import type { AxiosResponse } from "axios"
import sourceType from "./sourceType"

type RepoAPI = {
  name: string,
  api: any
}

const repositories: Array<RepoAPI> = [
  {
    name: "sourceType",
    api: sourceType
  }
]

function findRepo(name: string) {
  const repo = repositories.find(repo => repo.name === name)
  return repo?.api
}

export const RepositoryAPI = {
  get: (name : any): any => findRepo(name)
}