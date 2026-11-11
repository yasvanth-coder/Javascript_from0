const filters = {
    brightness: {
        value: 100,
        unit: "%",
        min: 0,
        max: 200
    },
    saturation: {
        value: 100,
        unit: "%",
        min: 0,
        max: 200
    },
    inversion: {
        value: 0,
        unit: "%",
        min: 0,
        max: 100
    },
    grayscale: {
        value: 0,
        unit: "%",
        min: 0,
        max: 100
    },
    exposure: {
        value: 100,
        unit: "%",
        min: 0,
        max: 200
    },
    blur: {
        value: 0,
        unit: "px",
        min: 0,
        max: 100
    },
    hueRotate: {
        value: 0,
        unit: "deg",
        min: 0,
        max: 360
    },
    sepia: {
        value: 0,
        unit: "%",
        min: 0,
        max: 100
    },
    contrast: {
        value: 100,
        unit: "%",
        min: 0,
        max: 200
    },
    invert: {
        value: 0,
        unit: "%",
        min: 0,
        max: 100
    },
}
function createFilterElement(name,unit="%",value,min ,max){
    const div=document.createElement("div");
    div.classList.add("filter");
    

    const input=document.createElement("input");
    input.type="range";
    input.min=min;
    input.max=max;
    input.value=value;
    input.id=name;

    const p=document.createElement("p");
    p.innerText=name

    div.appendChild(p);
    div.appendChild(input);
    
    return div;
}

Object.keys(filters).forEach(key => {
    const filterElement=createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max);
});