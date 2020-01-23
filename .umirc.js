export default {
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
  ],
};
