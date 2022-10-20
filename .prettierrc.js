module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100, // 每行文字数量达 100 字就换到新的一行
  semi: false, // 每个语句的结尾不需要分号
  singleQuote: true, // 字符串使用单引号，而不是双引号
  trailingComma: 'none' // 如 Object、Array 內的元素不需要尾随逗号
}
