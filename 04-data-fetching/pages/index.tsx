import { GetStaticProps, NextPage } from 'next';

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
  return {
    props: {
      products: [{ id: 'p1', title: 'Product 1' }],
    },
  };
};
