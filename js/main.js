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

window.addEventListener('load', () => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 10, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
})



Dropzone.autoDiscover = false;

const myDropzone = new Dropzone(".dropzone", {
    autoProcessQueue: false,
    url: "/",
    // maxFiles: 2,
    paramName: 'temp',
    acceptedFiles: "jpeg,.jpg,.png",
    addRemoveLinks: true,
    maxFilesize: 50, //MB
    dictFileTooBig: 'Файл слишком большой. Максимальный размер файла: 50MiB.',
    dictDefaultMessage: 'Поместите файлы сюда для загрузки',
    dictRemoveFile: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3334 8.00002C15.3334 12.0501 12.0502 15.3334 8.00008 15.3334C3.94999 15.3334 0.666748 12.0501 0.666748 8.00002C0.666748 3.94993 3.94999 0.666687 8.00008 0.666687C12.0502 0.666687 15.3334 3.94993 15.3334 8.00002ZM5.19551 5.19532C4.93516 5.45567 4.93516 5.87778 5.19551 6.13813L7.05744 8.00006L5.19551 9.86199C4.93516 10.1223 4.93516 10.5444 5.19551 10.8048C5.45586 11.0651 5.87797 11.0651 6.13832 10.8048L8.00024 8.94287L9.86217 10.8048C10.1225 11.0651 10.5446 11.0651 10.805 10.8048C11.0653 10.5444 11.0653 10.1223 10.805 9.86199L8.94305 8.00006L10.805 6.13813C11.0653 5.87778 11.0653 5.45567 10.805 5.19532C10.5446 4.93497 10.1225 4.93497 9.86217 5.19532L8.00024 7.05725L6.13832 5.19532C5.87797 4.93497 5.45586 4.93497 5.19551 5.19532Z" fill="#C2C3CC"/></svg>',
    dictCancelUpload: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3334 8.00002C15.3334 12.0501 12.0502 15.3334 8.00008 15.3334C3.94999 15.3334 0.666748 12.0501 0.666748 8.00002C0.666748 3.94993 3.94999 0.666687 8.00008 0.666687C12.0502 0.666687 15.3334 3.94993 15.3334 8.00002ZM5.19551 5.19532C4.93516 5.45567 4.93516 5.87778 5.19551 6.13813L7.05744 8.00006L5.19551 9.86199C4.93516 10.1223 4.93516 10.5444 5.19551 10.8048C5.45586 11.0651 5.87797 11.0651 6.13832 10.8048L8.00024 8.94287L9.86217 10.8048C10.1225 11.0651 10.5446 11.0651 10.805 10.8048C11.0653 10.5444 11.0653 10.1223 10.805 9.86199L8.94305 8.00006L10.805 6.13813C11.0653 5.87778 11.0653 5.45567 10.805 5.19532C10.5446 4.93497 10.1225 4.93497 9.86217 5.19532L8.00024 7.05725L6.13832 5.19532C5.87797 4.93497 5.45586 4.93497 5.19551 5.19532Z" fill="#C2C3CC"/></svg>',
    dictCancelUploadConfirmation: 'Вы уверены, что хотите отменить эту загрузку?',
    dictMaxFilesExceeded: 'Вы больше не можете загружать файлы.',
    dictInvalidFileType: 'Вы не можете загружать файлы этого типа.',
    dictFallbackMessage: "Ваш браузер не поддерживает загрузку файлов drag'n'drop.",
    dictFallbackText: 'Пожалуйста, используйте резервную форму ниже, чтобы загрузить свои файлы, как в старые добрые времена.',
    removedfile: function (file) {
        var _ref;
        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    }
});


const pollForm = document.querySelector('.poll-form')
pollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
})
