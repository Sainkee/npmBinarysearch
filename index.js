const binarysearch = function (arr, tar) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);

    if (arr[mid] == tar) {
      return mid;
    }
    if (arr[mid] > tar) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
};

module.exports = binarysearch;
