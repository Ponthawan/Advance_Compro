const kvArray = [
    { key: 1, value: 10 },
    { key: 1, value: 20 },
    { key: 1, value: 30 },
  ];
   

  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

  console.log(reformattedArray);
  console.log(kvArray);