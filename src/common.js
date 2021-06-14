const mapAction = {
  create: {
    alias: 'c', //别名
    description: '创建一个项目',
    examples: [
      'hxh-cli create <project-name>',
    ],
  },
  config: {
    alias: 'conf',
    description: '配置项目',
    examples: [
      'hxh config set <k> <v>',
      'hxh config get <k>',
    ],
  },
  '*': {
    alias: '',
    description: '命令未找到',
    examples: [],
  },
};

module.exports = {
  mapAction
}
