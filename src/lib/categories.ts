import { Category } from "../interfaces/category";
import { Paths } from "../interfaces/paths";
import { uid, url, type, v, getPaths } from "../utils";

export async function  getCategoryByPaths(
  i: string,
  paths: Paths
): Promise<Category> {
  // console.log('url', `${url}/api/${v}/${type}/query/categories/${i}/category/${uid}/${getPaths(
  //   paths
  // )}`)
  const res = await fetch(
    `${url}/api/${v}/${type}/query/categories/${i}/category/${uid}/${getPaths(
      paths
    )}`,
    
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export async function getCategoriesByParentId(
  i: string,
  id: string
): Promise<Category[]> {
  const res = await fetch(
    `${url}/api/${v}/${type}/query/categories/${i}/category/parentId?id=${id}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export async function getCategoryByPathsSeo(i: string, paths: Paths) {
  const res = await fetch(
    `${url}/api/${v}/${type}/query/categories/${i}/category/${uid}/${getPaths(
      paths
    )}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export async function getCategoriesBySiteId(i: string): Promise<Category[]> {
  const res = await fetch(
    `${url}/api/${v}/${type}/query/categories/${i}/category/siteId?id=${uid}`,
    // { next: { revalidate: 60 } }
    {cache: 'no-cache'}

    
  );
  return res.json();
}
