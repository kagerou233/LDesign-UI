export const defaultNamespace = "l-";
// 通过bem方法生成所有的命名规则
const _bem = (namespace, block) => {
  let classname = `${namespace}${block}`;
  return classname;
};
export const useNamespace = (block) => {
  const namespace = defaultNamespace;
  //block
  const b = () => _bem(namespace, block);
  //element
  //   const element = _bem();

  return {
    namespace,
    b,
  };
};
