/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  let stack = [];

  for(let i = 0; i < path.length; i++) {
    if (path[i] === '/') {
      continue;
    }
    let temp = '';
    while(i < path.length && path[i] !== '/') {
      temp += path[i];
      i++;
    }
    if (temp === '.') {
      continue;
    }
    if (temp === '..') {
      if (stack.length) {
        stack.pop();
      }
    } else {
      stack.push(temp);
    }
  }

  if (stack.length) {
    return '/' + stack.join('/');
  } else {
    return '/';
  }
};

simplifyPath("/home/")