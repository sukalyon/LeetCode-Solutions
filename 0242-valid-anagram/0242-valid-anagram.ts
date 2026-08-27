function isAnagram(s: string, t: string): boolean {
if(s.length !== t.length) return false;

const charMap = new Map <string, number>();

    for (let letter of s){
    const currentCount = charMap.get(letter) ?? 0;
    charMap.set(letter, currentCount + 1);
    }

    for (let letter of t){
    const count = charMap.get(letter) ?? 0;

     if(count ===0) return false;

    charMap.set(letter, count -1);

    }
  return true;
};