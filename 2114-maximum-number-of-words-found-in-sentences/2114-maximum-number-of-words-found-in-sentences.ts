function mostWordsFound(sentences: string[]): number {
    let maxWords: number=0;

    for (let i=0; i<sentences.length; i++){
    let space: number = sentences[i].split(" ").length
      if(space>maxWords){
        maxWords=space;
      }
    }

    return maxWords;
};