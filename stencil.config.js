exports.config = {
  namespace: 'index',
  generateDistribution: true,
  bundles: [
    {
      components: ['my-name'],
      components: ['my-dropdown']
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
