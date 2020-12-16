export function scrollToBottom (objEl: HTMLElement) {
    // Set timeout handles any lag in drawing the elements
    setTimeout(() => {
        objEl.scrollTop = objEl.scrollHeight - objEl.clientHeight;
    }, 500)
}

export function isScrolledToBottom (objEl: HTMLElement) {
    if (!objEl) return false;
    // allow 1px inaccuracy by adding 1
    return objEl.scrollHeight - objEl.clientHeight <= objEl.scrollTop + 1;
}