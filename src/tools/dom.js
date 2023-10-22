export function inputFocus(e) {
    const input = e.target;
    const inputType = input.type;
    if (input.value.length > 0) {
        setTimeout(() => {
            input.type = 'text';
            input.setSelectionRange(0, input.value.length);
            input.type = inputType;
        }, 0);
    }
}
