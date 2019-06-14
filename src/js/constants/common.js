export const SHOW_MODAL = 'SHOW_MODAL';
export const FULL_LIMIT = 100;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/mcoq.ru/?hl=ru',
  facebook: '#facebook',
  twitter: '#twitter',
  youtube: '#youtube',
};

export const noop = () => {};

export const get = (obj, getPropName, defaultValue) => {
  function getValue(currentObj, value) {
    const currentValue = currentObj && currentObj[value];
    return currentValue || defaultValue;
  }

  return typeof obj === 'object' ? getPropName.split('.').reduce(getValue, obj) : defaultValue;
};
