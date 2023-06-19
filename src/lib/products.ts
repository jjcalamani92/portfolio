import { Product } from "../interfaces/product";
import { uid, url, type, v, getPaths } from "../utils";

export const getProductsByParentId = async (id: string):Promise<Product []> => {
  const res = await fetch(`${url}/api/${v}/${type}/query/products/product/parentId?id=${id}`);
  return await res.json();
};

export async function getProductsByLoadMore( parentId: string, pageSize: number, pageNumber: number) {
  const res = await fetch(`${url}/api/${v}/${type}/query/products/parentId/${parentId}/paginate?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  return res.json();
}

export async function getProductsByPaginate( parentId: string, pageSize: number, pageNumber: number) {
  const res = await fetch(`${url}/api/${v}/${type}/query/products/product/paginate?pageSize=${pageSize}&pageNumber=${pageNumber}&id=${parentId}`);
  return res.json();
}
export async function getProductsByParentIdByLoadMore( parentId: string, pageNumber: number) {
  const res = await fetch(`${url}/api/${v}/${type}/query/products/product/loadmore?pageNumber=${pageNumber}&id=${parentId}`);
  const response = await res.json()
  return {
    products: response.products,
    nextCursor: response.info.page+1
  };
}

export async function getProductById( id: string ): Promise<Product> {
  const res = await fetch(
    `${url}/api/${v}/${type}/query/products/${id}`
  );
  return res.json();
}