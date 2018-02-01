module.exports = (context) => {
  const { name, suffix } = context.data.root.query;
  return `${name}${suffix}`;
};
