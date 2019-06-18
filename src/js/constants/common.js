export const SHOW_MODAL = 'SHOW_MODAL';
export const FULL_LIMIT = 100;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/mcoq.ru/?hl=ru',
  facebook: '#facebook',
  twitter: '#twitter',
  youtube: '#youtube',
};

export const NUMBER = '74995830670';
export const WORK_TIME = '8:00-20:00';
export const ADDRESS = '143040 МО г.Голицыно Генерала Ремезова, д.6';

export const noop = () => {};
export const preventDefault = e => e.preventDefault();

export const get = (obj, getPropName, defaultValue) => {
  function getValue(currentObj, value) {
    const currentValue = currentObj && currentObj[value];
    return currentValue || defaultValue;
  }

  return typeof obj === 'object' ? getPropName.split('.').reduce(getValue, obj) : defaultValue;
};
