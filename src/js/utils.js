import dictionary from './dictionary';

export const getBreadCrumbs = path => path && typeof path === 'string' && path.split('/').reduce((acc, it) => dictionary[it] && `${acc} / ${dictionary[it]}` || acc, dictionary.main) || '';
