const paralaxElems = document.querySelectorAll('[data-id="paralax-block"]');
if (paralaxElems.length > 0) {
    paralaxElems.forEach(elem => {
        const elemtntParent = elem.closest('body');
        const parallaxInstance = new Parallax(elem, {
            inputElement: elemtntParent,
            hoverOnly: true,
            relativeInput: true
        });
    });
}