const LinkResolver = (doc) => {
  //   if (doc.type === 'singel_product') return `/detail/${doc.slug}`;
  //   if (doc.type === 'about') return `/${doc.type}`;
  //   if (doc.type === 'collections') return `/${doc.type}`;
  console.log(doc);
  return '/';
};

export default LinkResolver;
