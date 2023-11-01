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

const toSecondScreenBtn = document.querySelector('[data-second-screen]');
const secondScreen = document.querySelector('.second-screen');
toSecondScreenBtn.addEventListener("click", (e) => {
    secondScreen.scrollIntoView({ block: "start", behavior: "smooth" })
})



Dropzone.autoDiscover = false;
const maxFiles = 2;
const myDropzone = new Dropzone(".dropzone", {
    autoProcessQueue: false,
    url: "/",
    maxFiles,
    paramName: 'temp',
    acceptedFiles: "image/jpeg,image/jpg,image/png,",
    addRemoveLinks: true,
    maxFilesize: 50, //MB
    dictFileTooBig: 'Файл слишком большой. Максимальный размер файла: 50MiB.',
    dictDefaultMessage: 'Поместите файлы сюда для загрузки',
    dictRemoveFile: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3334 8.00002C15.3334 12.0501 12.0502 15.3334 8.00008 15.3334C3.94999 15.3334 0.666748 12.0501 0.666748 8.00002C0.666748 3.94993 3.94999 0.666687 8.00008 0.666687C12.0502 0.666687 15.3334 3.94993 15.3334 8.00002ZM5.19551 5.19532C4.93516 5.45567 4.93516 5.87778 5.19551 6.13813L7.05744 8.00006L5.19551 9.86199C4.93516 10.1223 4.93516 10.5444 5.19551 10.8048C5.45586 11.0651 5.87797 11.0651 6.13832 10.8048L8.00024 8.94287L9.86217 10.8048C10.1225 11.0651 10.5446 11.0651 10.805 10.8048C11.0653 10.5444 11.0653 10.1223 10.805 9.86199L8.94305 8.00006L10.805 6.13813C11.0653 5.87778 11.0653 5.45567 10.805 5.19532C10.5446 4.93497 10.1225 4.93497 9.86217 5.19532L8.00024 7.05725L6.13832 5.19532C5.87797 4.93497 5.45586 4.93497 5.19551 5.19532Z" fill="#C2C3CC"/></svg>',
    dictCancelUpload: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3334 8.00002C15.3334 12.0501 12.0502 15.3334 8.00008 15.3334C3.94999 15.3334 0.666748 12.0501 0.666748 8.00002C0.666748 3.94993 3.94999 0.666687 8.00008 0.666687C12.0502 0.666687 15.3334 3.94993 15.3334 8.00002ZM5.19551 5.19532C4.93516 5.45567 4.93516 5.87778 5.19551 6.13813L7.05744 8.00006L5.19551 9.86199C4.93516 10.1223 4.93516 10.5444 5.19551 10.8048C5.45586 11.0651 5.87797 11.0651 6.13832 10.8048L8.00024 8.94287L9.86217 10.8048C10.1225 11.0651 10.5446 11.0651 10.805 10.8048C11.0653 10.5444 11.0653 10.1223 10.805 9.86199L8.94305 8.00006L10.805 6.13813C11.0653 5.87778 11.0653 5.45567 10.805 5.19532C10.5446 4.93497 10.1225 4.93497 9.86217 5.19532L8.00024 7.05725L6.13832 5.19532C5.87797 4.93497 5.45586 4.93497 5.19551 5.19532Z" fill="#C2C3CC"/></svg>',
    dictCancelUploadConfirmation: 'Вы уверены, что хотите отменить эту загрузку?',
    dictMaxFilesExceeded: `Максимальное колличество файлов для загрузки - ${maxFiles}`,
    dictInvalidFileType: 'Вы не можете загружать файлы этого типа.',
    dictFallbackMessage: "Ваш браузер не поддерживает загрузку файлов drag'n'drop.",
    dictFallbackText: 'Пожалуйста, используйте резервную форму ниже, чтобы загрузить свои файлы, как в старые добрые времена.',
    addedfile: function (file) {
        this.element.closest('.field-wrap').classList.remove('has-err');
        const isAcceptedFiles = this.options.acceptedFiles.split(',').includes(file.type);
        if (isAcceptedFiles) {
            if (this.element === this.previewsContainer) {
                this.element.classList.add("dz-started");
            }

            if (this.previewsContainer && !this.options.disablePreviews) {
                file.previewElement = Dropzone.createElement(
                    this.options.previewTemplate.trim()
                );
                file.previewTemplate = file.previewElement; // Backwards compatibility

                this.previewsContainer.appendChild(file.previewElement);
                for (var node of file.previewElement.querySelectorAll("[data-dz-name]")) {
                    node.textContent = file.name;
                }
                for (node of file.previewElement.querySelectorAll("[data-dz-size]")) {
                    node.innerHTML = this.filesize(file.size);
                }

                if (this.options.addRemoveLinks) {
                    file._removeLink = Dropzone.createElement(
                        `<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`
                    );
                    file.previewElement.appendChild(file._removeLink);
                }

                let removeFileEvent = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (file.status === Dropzone.UPLOADING) {
                        return Dropzone.confirm(
                            this.options.dictCancelUploadConfirmation,
                            () => this.removeFile(file)
                        );
                    } else {
                        if (this.options.dictRemoveFileConfirmation) {
                            return Dropzone.confirm(
                                this.options.dictRemoveFileConfirmation,
                                () => this.removeFile(file)
                            );
                        } else {
                            return this.removeFile(file);
                        }
                    }
                };

                for (let removeLink of file.previewElement.querySelectorAll(
                    "[data-dz-remove]"
                )) {
                    removeLink.addEventListener("click", removeFileEvent);
                }
            }
        }

    },
    removedfile: function (file) {
        if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
        }
        return this._updateMaxFilesReachedClass();
    }
});


IMask(
    document.querySelector('input[type="tel"]'),
    {
        mask: '+{7} (000) 000-00-00'
    }
)
function validateEmail(email) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const formModal = document.querySelector('#form-modal');


const pollForm = document.querySelector('.poll-form')
const nameInput = pollForm.querySelector('[name="name"]');
const surameInput = pollForm.querySelector('[name="surname"]');
const emailInput = pollForm.querySelector('[name="email"]');
const phoneInput = pollForm.querySelector('[name="phone"]');
const messageTextatrea = pollForm.querySelector('[name="message"]');
const privacyInput = pollForm.querySelector('[name="privacy"]');
const fieldArr = [
    nameInput,
    surameInput,
    emailInput,
    phoneInput,
    messageTextatrea
];
fieldArr.forEach(item => {
    item.addEventListener('focus', e => {
        item.closest('.field-wrap').classList.remove('has-err')
    })
});
privacyInput.addEventListener('input', e => {
    privacyInput.closest('.field-wrap').classList.remove('has-err');
})
pollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formFiles = myDropzone.getAcceptedFiles();
    if (nameInput.value.length < 2) {
        nameInput.closest('.field-wrap').classList.add('has-err')
    }
    if (surameInput.value.length < 2) {
        surameInput.closest('.field-wrap').classList.add('has-err')
    }
    if (!validateEmail(emailInput.value)) {
        emailInput.closest('.field-wrap').classList.add('has-err')
    }
    if (phoneInput.value.length < 18) {
        phoneInput.closest('.field-wrap').classList.add('has-err')
    }
    if (messageTextatrea.value.length < 3) {
        messageTextatrea.closest('.field-wrap').classList.add('has-err')
    }
    if (formFiles.length < 1) {
        myDropzone.element.closest('.field-wrap').classList.add('has-err')
    }
    if (!privacyInput.checked) {
        privacyInput.closest('.field-wrap').classList.add('has-err')
    }
    const hasError = pollForm.querySelectorAll('.has-err').length;
    if (hasError) return;

    const formData = new FormData(pollForm);
    pollForm.forEach(file => {
        formData.append(file.name, file);
    });
    formModal.classList.add('show');


    fetch('/sendmail.php', {
        method: 'POST',
        body: formData
    }).then(() => {
        pollForm.reset()
        myDropzone.removeAllFiles(true);
    }).catch(err => {
        console.log(err);
    })
});



