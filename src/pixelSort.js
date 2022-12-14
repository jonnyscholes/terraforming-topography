var sortarr = [];

export default function pixelSort(image, filter, sorter) {
  sort(image.transpose(1, 0, 2), filter, sorter);
  sort(image.transpose(0, 1, 2), filter, sorter);
  return image;
}

function sort(image, filter, sorter) {
  var width = image.shape[0];
  var height = image.shape[1];

  for (var x = 0; x < width; x++) {
    var slice = image.pick(x, null, null);
    var first = null;
    var next = null;

    // Find the first pixel matching the filter,
    // and the next pixel that doesn't match it.
    for (var y = 0; y < height; y++) {
      var matches = filter(slice.get(y, 0), slice.get(y, 1), slice.get(y, 2));

      if (first === null) {
        if (matches) first = y;
      } else {
        if (!matches) {
          next = y;
          break;
        }
      }
    }

    if (first === null) continue;
    if (next === null) next = height - 1;
    y = next + 1;

    sortarr.length = 0;
    for (var i = first; i <= next; i++) {
      var color = [];
      color[0] = slice.get(i, 0);
      color[1] = slice.get(i, 1);
      color[2] = slice.get(i, 2);
      sortarr.push(color);
    }

    sortarr = sortarr.sort(sorter);

    for (var i = first, n = 0; i <= next; i++) {
      var color = sortarr[n++];
      slice.set(i, 0, color[0]);
      slice.set(i, 1, color[1]);
      slice.set(i, 2, color[2]);
    }
  }
}
