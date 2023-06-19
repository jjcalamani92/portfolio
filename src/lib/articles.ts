import { Article } from "../interfaces/article";

import { url, type, uid, v } from "../utils";

export const getArticleById = async (id: string):Promise<Article> => {
  const res = await fetch(`${url}/api/${v}/${type}/query/articles/${id}`, {cache: 'no-store'});

  return res.json();
};
export const getArticlesByParentId = async (id: string):Promise<Article []> => {
  const res = await fetch(`${url}/api/${v}/${type}/query/articles/article/parentId?id=${id}`, {cache: 'no-store'});

  return res.json();
};