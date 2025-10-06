
let vc=prompt("Enter your Letter");

vc=vc.toLowerCase();

if(vc == "a" || vc =="e" || vc=="i" || vc=="o" || vc=="u")
    document.writeln("vowel");

else if(vc<=0 || vc>100)
    document.writeln("invalid");

else
document.writeln("consonant");