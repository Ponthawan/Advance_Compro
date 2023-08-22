function canMove(piece, currentPosition, targetPosition) {

    const currentFile = currentPosition[0].charCodeAt(0) - 'A'.charCodeAt(0);
    const currentRank = parseInt(currentPosition[1]);
    const targetFile = targetPosition[0].charCodeAt(0) - 'A'.charCodeAt(0);
    const targetRank = parseInt(targetPosition[1]);
  

    const rankDiff = Math.abs(targetRank - currentRank);
    const fileDiff = Math.abs(targetFile - currentFile);
  
    switch (piece.toLowerCase()) {
      case 'pawn':

        return (currentFile === targetFile && rankDiff === 1) ||
               (Math.abs(fileDiff) === 1 && rankDiff === 1);
        
      case 'knight':
  
        return (rankDiff === 2 && fileDiff === 1) ||
               (rankDiff === 1 && fileDiff === 2);
        
      case 'bishop':
        
        return fileDiff === rankDiff;
        
      case 'rook':
        
        return currentFile === targetFile || currentRank === targetRank;
        
      case 'queen':
 
        return currentFile === targetFile || currentRank === targetRank || fileDiff === rankDiff;
        
      case 'king':

        return fileDiff <= 1 && rankDiff <= 1;
        
      default:
       
        return false;
    }
  }
   
  console.log(canMove("Rook", "A8", "H8"));  
  console.log(canMove("Pawn", "E2", "E4"));  
  console.log(canMove("Knight", "G8", "H6"));  


  
