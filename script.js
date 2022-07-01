const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none";
}
function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"],["e", "enter"], ["i","imes"],["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
// toLowerCase -> método especifico para letra minusculas.

    for( let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i] [1])
        }
    }

 return stringEncriptada

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"],["enter", "e"], ["imes","i"],["ober", "o"], ["ufat", "u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for( let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i] [1])
        }


}
 return stringDesencriptada 

}
const result = document.querySelector(".mensagem");

function btnCopiar(){
    navigator.clipboard.writeText(result.value);
    mensagem.value= ""
    mensagem.style.backgroundImage = "url('imagens/confeiteira.png')";
}


       
      