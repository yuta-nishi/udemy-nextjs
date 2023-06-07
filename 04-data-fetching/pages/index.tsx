import fs from 'fs/promises';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';

interface Props {
  products: [
    {
      id: string;
      title: string;
    }
  ];
}

const HomePage: NextPage<Props> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  console.log(process.cwd());
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data: Props = JSON.parse(jsonData.toString());

  return {
    props: {
      products: data.products,
    },
  };
};
