function flexIt(){
    let finder = document.getElementsByClassName ('needFlex')[0];
    // let addOn= document.getElementsByClassName('flexIt')=finder;
    document.getElementById("needFlex").classList.add("flexIt");

    //  return finder+addOn;

    let element= document.getElementsByClassName('needFlex');
    element.classList.toggle("flexIt");
}

    let emphasize= document.getElementsByClassName("emphasize");

    function emphasizehouse(){
     emphasize.innerHTML="";
    };
     document.querySelector("emphasize").onclick =emphasize;







