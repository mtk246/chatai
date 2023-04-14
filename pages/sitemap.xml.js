import fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const sitemap = fs.readFileSync('./sitemap.xml');
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
};

export default Sitemap;