module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { out, dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/code-of-conduct": { page: "/code-of-conduct" },
    };
  },
};
