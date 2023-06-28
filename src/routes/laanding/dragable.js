

/**
 * @param {HTMLDivElement} node
 */
export function dragMe(node) {
    let moving = false;
    let left = 8;
    let top = 8;

    node.style.position = 'fixed';
    node.style.bottom = `${top}px`;
    node.style.right = `${left}px`;
    node.style.cursor = 'move';
    node.style.userSelect = 'none';

    node.addEventListener('mousedown', () => {
        moving = true;
    });
    
   window.addEventListener('mousemove', (e) => {
         if (moving) {
                left -= e.movementX;
                top -= e.movementY;
                node.style.bottom = `${top}px`;
                node.style.right = `${left}px`;
           }
    });
   
    window.addEventListener('mouseup', () => {
        moving = false;
    });

}