/*
let vc=prompt("Enter your Letter");

vc=vc.toLowerCase();


if(vc == "a" || vc =="e" || vc=="i" || vc=="o" || vc=="u")
    document.writeln("vowel = " + vc);

else if(vc<=0 || vc>100)
    document.writeln("invalid");

else if(vc == "b" || vc =="c" || vc=="d" || vc=="f" || vc=="g" || vc == "h"
     || vc =="m" || vc=="j" || vc=="k" || vc=="l" 
    || vc == "n" || vc =="p" || vc=="q" || vc=="r" || vc=="s" ||vc == "t" 
    || vc =="V" || vc=="w" || vc=="x" || vc=="Y" || vc=="z")
    document.writeln("consonant = " + vc)

else
document.writeln("invalids");

*/
/*
function extracAlphabets(str){               
                     // গ্লোবাল ওঃকেস ইনসেন্সিটিভ (g,i) ফ্ল্যাগ দিয়ে সব অক্ষরগুলো পাবো
                     // [A-Za-z] — শুধু ইংরেজি বড় ও ছোট অক্ষর
  let mstches= str.match(/[A-Za-z]/g);

  

  if(mstches){
    return mstches.join("");

  }

  else{
    return ("invalid");

  }
}

let mix=prompt("");
let alp = extracAlphabets(mix);
document.writeln(alp);
*/