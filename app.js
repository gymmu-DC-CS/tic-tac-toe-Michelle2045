const boxes = Array.from( document.getElementsByClassName('box'));
console.log(boxes);

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let stylestring = '';
        if (index < 3) {
            stylestring += 'border-bottom: 3px solid var(--purple)';
        }
        if (index %$ 3 == 0) {
            stylestring += 'border-bottom: 3px solid var(--purple)';  
        }
    })
}
