import { GetServerSideProps } from 'next';
import { redirect } from 'utils/redirect';

const index = () => {};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (res) {
    redirect(res, '/workspace/business/plan');
  }

  return {
    props: {},
  };
};

export default index;
