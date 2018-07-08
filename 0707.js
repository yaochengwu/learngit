let result = document.querySelector("#result"),
    stra = document.querySelector("#str-a"),
    strb = document.querySelector("#str-b"),
    numa = document.querySelector("#num-a").value,
    numb = document.querySelector("#num-b").value;

let but = document.querySelectorAll("div")[1];

//get the content
function inp() {
    let radio = document.querySelectorAll("input[type='radio']"),
        cont;
    radio.forEach(
        ele => {
            if (ele.checked) {
                cont = document.querySelector("#str-" + ele.value);
            }   
        }
    )
    return cont;
}

function tex(txt) {
    let txt = String(txt.value);
    return txt;

}

//cycle

but.addEventListener("click", e => {
    let lab = e.target.getAttribute("id");

    switch (lab) {
        case "btn-1":
            let con1 = tex(inp());
            result.innerHTML = con1.length;
            break;

        case "btn-2":
            let con2 = tex(inp());
            result.innerHTML = con2.charAt(2);
            break;
        case "btn-3":
            let str1 = tex(stra),
                str2 = tex(strb);
            result.innerHTML = str1.concat(str2);
            break;
        case "btn-4":
            let str1 = tex(stra),
                str2 = tex(strb);
            result.innerHTML = str1.indexOf(str2);
            break;
        case "btn-5":
            let con5 = tex(inp());
            result.innerHTML = con5.slice(numa, numb);
            break;
        case "btn-6":
            let con6 = tex(inp());
            result.innerHTML = con6.split("\n").legth;
            break;
        case "btn-7":
            let con7 = tex(inp());
            result.innerHTML = con7.split("\n").legth;
            break;
        case "btn-8":
            let con8 = tex(inp());
            result.innerHTML = con8.subString(numa, numb);
            break;
        case "btn-9":
            let con9 = tex(inp());
            result.innerHTML = con9.toUpperCase();
            break;
        case "btn-10":
            let con10 = tex(inp());
            result.innerHTML = con10.toLowerCase();
            break;
        case "btn-11":
            let con11 = tex(inp());
            result.innerHTML = con11.replace(/ /g, "");
            break;
        case "btn-12":
            let str1 = tex(stra),
                str2 = tex(strb);
            result.innerHTML = str1.replace(/a/g, str2);
            break;

    }
})
