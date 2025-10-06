
let vc=prompt("Enter your Letter");

vc=vc.toLowerCase();

if(vc == "a" || vc =="e" || vc=="i" || vc=="o" || vc=="u")
    document.writeln("vowel");

else if(vc<=0 || vc>100)
    document.writeln("invalid");

else if(vc == "b" || vc =="c" || vc=="d" || vc=="f" || vc=="g" || vc == "h"
     || vc =="m" || vc=="j" || vc=="k" || vc=="l" 
    || vc == "n" || vc =="p" || vc=="q" || vc=="r" || vc=="s" ||vc == "t" 
    || vc =="V" || vc=="w" || vc=="x" || vc=="Y" || vc=="z")
    document.writeln("consonant")

else
document.writeln("invalids");