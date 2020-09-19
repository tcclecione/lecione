const withConsts = (map, BaseClass = Object) => {
  class ConstClass extends BaseClass {}
  Object.keys(map).forEach((key) => {
    Object.defineProperty(ConstClass, key, {
      value: map[key],
      writable: false,
      enumerable: true,
      configurable: false,
    });
  });
  return ConstClass;
};

export default withConsts;
