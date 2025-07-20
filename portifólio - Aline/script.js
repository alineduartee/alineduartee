document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        console.log(`Indo para: $ {icon.href}`);
    })
})