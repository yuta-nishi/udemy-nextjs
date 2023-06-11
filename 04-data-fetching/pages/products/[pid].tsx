import { Product } from '@/types/Product';
import fs from 'fs/promises';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

interface Props {
  loadedProduct: Product;
}

interface Params extends ParsedUrlQuery {
  pid: string;
}

const ProductDetailPage: NextPage<Props> = ({ loadedProduct }) => {
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

export default ProductDetailPage;

const getData = async (): Promise<{ products: Product[] }> => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data: { products: Product[] } = JSON.parse(jsonData.toString());

  return data;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const productId = params!.pid as string;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: { products: Product[] } = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
