const deepEqual = (masterObject, slaveObject) => {
  const masterKeys = Object.keys(masterObject);
  const slaveKeys = Object.keys(slaveObject);

  if (masterKeys.length !== slaveKeys.length) return false;

  for (const key of masterKeys) {
    if (typeof masterObject[key] === 'object' && masterObject[key] !== null) {
      if (!deepEqual(masterObject[key], slaveObject[key])) return false;
    } else {
      if (masterObject[key] !== slaveObject[key]) return false;
    }
  }

  return true;
}
