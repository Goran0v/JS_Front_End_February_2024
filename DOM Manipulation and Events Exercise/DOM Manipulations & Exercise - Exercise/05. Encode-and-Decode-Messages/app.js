function encodeAndDecodeMessages() {
    const divElements = document.querySelectorAll('main > div');

    const encoderDiv = divElements[0];
    const decoderDiv = divElements[1];

    const buttonEncoderElement = encoderDiv.querySelector('button');
    const textareaEncoderElement = buttonEncoderElement.previousElementSibling;

    const buttonDecoderElement = decoderDiv.querySelector('button');
    const textareaDecoderElement = buttonDecoderElement.previousElementSibling;

    buttonEncoderElement.addEventListener('click', () => {
        const message = textareaEncoderElement.value;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            const charCode = message.charCodeAt(i) + 1;
            result += String.fromCharCode(charCode);
        }

        textareaDecoderElement.value = result;
        textareaEncoderElement.value = '';
    });

    buttonDecoderElement.addEventListener('click', () => {
        const message = textareaDecoderElement.value;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            const charCode = message.charCodeAt(i) - 1;
            result += String.fromCharCode(charCode);
        }

        textareaDecoderElement.value = result;
    });
}