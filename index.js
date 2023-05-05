let messageCatch;

window.addEventListener('load', function() {
  var textarea = document.getElementById("text");
  textarea.focus();
});

function encrypt() {
  let text = document.getElementById("text").value;
  let messageTitle = document.getElementById("message-title");
  let paragraph = document.getElementById("paragraph");
  let doll = document.getElementById("doll");
  let message = document.getElementById("message");
  let copy = document.querySelector(".copy");
  let terms = document.querySelector(".terms p");

  let encryptedText = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if(checktext(text)==true){ 
      terms.style.color="#495057";

    if (text.length != 0) {
      document.getElementById("message").value = encryptedText;
      messageCatch = encryptedText;
      copy.style.display="block";
      message.style.display="flex";
      message.style.visibility="visible";
      messageTitle.textContent = "Texto encriptado con éxito";
      paragraph.textContent = "";
      doll.style.display="none";
    } else {
      doll.style.display="flex";
      doll.src = "./img/doll.png";
      messageTitle.textContent = "Ningún mensaje fue encontrado";
      paragraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      message.style.display="none";
      message.style.visibility="hidden";
      copy.style.display="none";
      text.length=0;
    }

    }else{
    terms.style.color="red";
  }
}

function decrypt() {
  let text = document.getElementById("text").value;
  let messageTitle = document.getElementById("message-title");
  let paragraph = document.getElementById("paragraph");
  let doll = document.getElementById("doll");
  let message = document.getElementById("message");
  let copy = document.querySelector(".copy");
  let terms = document.querySelector(".terms p");

  let encryptedText = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if(checktext(text)==true){ 
      terms.style.color="#495057";

      if (text.length != 0) {
        document.getElementById("message").value = encryptedText;
        messageCatch = encryptedText;
        copy.style.display="block";
        message.style.display="flex";
        message.style.visibility="visible";
        messageTitle.textContent = "Texto desencriptado con éxito";
        paragraph.textContent = "";
        doll.style.display="none";
      } else {
        doll.style.display="flex";
        doll.src = "./img/doll.png";
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        paragraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        message.style.display="none";
        message.style.visibility="hidden";
        copy.style.display="none";
        text.length=0;
      }
  }else{
    terms.style.color="red";
  }
  

}

function checktext(text){
  let checkterms=false;
  if (/^[a-z\s\-\_\.\,\:\;\!\?\ñ]+$/.test(text)) {
    checkterms=true;
  }
  if(text.length==0){
    checkterms=true;
  }
  return checkterms;
}

function copyMessage() {
  navigator.clipboard.writeText(messageCatch);
  alert("texto copiado");
}