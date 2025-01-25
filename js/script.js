function copy(text, targetId) {

    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    

    input.select();
    input.setSelectionRange(0, 99999); // Para móviles
    document.execCommand('copy');
    
    // Eliminar el input temporal
    document.body.removeChild(input);
    
    // Mostrar mensaje visual de copiado
    const tooltip = document.createElement('div');
    tooltip.textContent = '¡Copiado en el portapapeles!';
    tooltip.style.position = 'fixed';
    tooltip.style.backgroundColor = '#373737';
    tooltip.style.color = '#CB612F';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '0px';
    tooltip.style.bottom = '20px'; 
    tooltip.style.right = '20px'; 
    tooltip.style.fontSize = '14px';
    tooltip.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    tooltip.style.zIndex = '1000';
    tooltip.style.opacity = '1';
    tooltip.style.transition = 'opacity 0.5s ease';

    document.body.appendChild(tooltip);


    setTimeout(() => {
        tooltip.style.opacity = '0'; 
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 500); 
    }, 2000);
}
