export const getTabs = (data) => {
  
  return {                                 //redux store setting data in store 
    type: 'getTabs',
    payload: "getTabs"
  }
};

export const getTabA = (data) => {
  return {
    type: 'getTabA',
    payload: "gettabsA"
  };
};

export const getTabB = (data) => {
  return {
    type: 'getTabB',
    payload: "getTabB"

  };
};