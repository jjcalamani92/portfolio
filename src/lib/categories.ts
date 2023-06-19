import { Category } from "../interfaces/category";
import { Paths } from "../interfaces/paths";
import { uid, url, type, v, getPaths } from "../utils";

export async function getCategoryByPaths(i:string,  paths: Paths):Promise<Category> {
  const res = await fetch(`${url}/api/${v}/${type}/query/categories/${i}/category/${uid}/${getPaths(paths)}`, {cache: 'no-store'});
  return res.json();
}

export async function getCategoriesByParentId(i:string,  id: string):Promise<Category[]> {
  const res = await fetch(`${url}/api/${v}/${type}/query/categories/${i}/category/parentId?id=${id}`, );
  return res.json();
}