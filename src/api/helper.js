function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }

  const generateSubID = () => {
    const id = `S${Math.floor(Math.random() * 900) + 100}`;
    return id;
  };
  
  const generateProdID = () => {
    const id = `P${Math.floor(Math.random() * 900) + 100}`;
    return id;
  };  
  
  module.exports = {
    getOffset,
    emptyOrRows,
    generateSubID,
    generateProdID
  }