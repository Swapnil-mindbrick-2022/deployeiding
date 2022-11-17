const arr = [
  {
    name: 'string 1',
    arrayWithvalue: '1,2',
    other: 'that',
  },
  {
    name: 'string 2',
    arrayWithvalue: '2',
    other: 'that',
  },
  {
    name: 'string 2',
    arrayWithvalue: '2,3',
    other: 'that',
  },
  {
    name: 'string 2',
    arrayWithvalue: '4,5',
    other: 'that',
  },
  {
    name: 'string 2',
    arrayWithvalue: '4',
    other: 'that',
  },
];

const items = arr.filter(item => item.arrayWithvalue.indexOf('4') !== -1);

console.log(items);