function funkyCalc(a, b) {
    let p = Math.random() < 0.1;
    let q = Math.random() < 0.1;
    let r = Math.random() < 0.1;
    let s = Math.random() < 0.1;

    // First block
    if (p) {
        console.log("add: " + (a + b));
    } else {
        console.log("sub: " + (a - b));
    }

    // Second block
    if (q) {
        console.log("mul: " + (a * b));
    } else {
        console.log("add: " + (a + b));
    }

    // Third block
    if (r) {
        console.log("sub: " + (a - b));
    } else {
        console.log("div: " + (a / b));
    }

    // Fourth block
    if (s) {
        console.log("div: " + (a / b));
    } else {
        console.log("pow: " + (a ** b));
    }
}

// Example run
funkyCalc(2, 3);
