import { Article } from "../interfaces/article";

import { url, type, uid, v } from "../utils";

export const getArticleById = async (id: string):Promise<Article> => {
  const res = await fetch(`${url}/api/${v}/${type}/query/articles/${id}`);
  
  return res.json();
};
export const getArticlesByParentId = async (id: string):Promise<Article []> => {
  const res = await fetch(`${url}/api/${v}/${type}/query/articles/article/parentId?id=${id}`);

  return res.json();
};

export async function getArticlesBySiteId():Promise<Article []> {
  const res = await fetch(`${url}/api/${v}/${type}/query/articles/article/siteId?id=${uid}`, );
  
  return res.json();
}