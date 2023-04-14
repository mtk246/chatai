import fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  try {
    const sitemap = fs.readFileSync('./sitemap.xml');
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
    return {
      props: {},
    };
  } catch (error) {
    console.log(error);
  }
};

export default Sitemap;