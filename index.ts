/**向量类型，由一组数字数组构成 */
type Vector = number[];

/**
 * @description 取模计算
 * @param v1 向量A
 * @param v2 向量B
 * @returns 两向量模
 */
function calcModule(v1: Vector, v2: Vector) {
  if (v1.length !== v2.length) throw new Error("向量维度不一致！");
  let sum: number = 0;
  for (let i = 0; i < v1.length; i++) {
    sum += Math.pow(Math.abs(v2[i] - v1[i]), 2);
  }
  return Math.sqrt(sum);
}

/**
 * @description 生成随机向量
 * @param number 生成数量
 * @param dimension 维度
 * @returns 向量
 */
function generateVectors(number: number, dimension: number) {
  let arr: Vector[] = [];
  for (let i = 0; i < number; i++) {
    arr[i] = [];
    for (let j = 0; j < dimension; j++) {
      arr[i][j] = Math.random();
    }
  }
  return arr;
}

/**
 * @description DEMO：图片分类
 */
function 图像分类() {
  /**维度设置（按颜色分类）：红 橙 黄 绿 蓝 靛 紫*/
  const images = [
    {description: "偏紫色，带一点淡黄", module: [0, 0, 0.2, 0, 0, 0, 0.47]},
    {description: "偏紫色，带一点淡黄", module: [0.1, 0, 0.3, 0, 0, 0, 0.6]},
    {description: "偏绿", module: [0, 0, 0.8, 0, 0, 0, 0]},
  ];

  const purple = [0, 0, 0, 0, 0, 0, 1];
  const yellow = [0, 0, 1, 0, 0, 0, 0];

  let purpleModules = images.map((arr, i) => ({
    desc: arr.description,
    module: calcModule(arr.module, purple),
  }));

  let yellowModules = images.map((arr, i) => ({
    desc: arr.description,
    module: calcModule(arr.module, yellow),
  }));

  console.log({purpleModules, yellowModules});
}

/**
 * @description 逆序数
 */
function reverseNumber(num: string | number) {
  let str = num.toString();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const current = str[i];
      const next = str[j];
      if (next < current) count++;
    }
  }
  console.log(count);
}

图像分类();
