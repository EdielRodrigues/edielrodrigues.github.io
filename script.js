function toggleFerramentas(){

let anuncio=document.getElementById("anuncio")
let area=document.getElementById("areaFerramentas")

anuncio.style.display="block"

setTimeout(function(){
area.style.display = area.style.display==="none" ? "block":"none"
},2000)

}

function gerarSenha(){
let caracteres="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let senha=""
for(let i=0;i<12;i++){
senha+=caracteres.charAt(Math.floor(Math.random()*caracteres.length))
}
document.getElementById("senhaGerada").value=senha
}

function gerarLinkWhats(){
let telefone=document.getElementById("telefone").value
let mensagem=document.getElementById("mensagem").value
let link="https://wa.me/"+telefone+"?text="+encodeURIComponent(mensagem)
document.getElementById("linkGerado").value=link
}

function gerarQR(){
let texto=document.getElementById("qrTexto").value
let url="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+encodeURIComponent(texto)
document.getElementById("qrResultado").innerHTML="<img src='"+url+"'>"
}

function maiusculo(){
let t=document.getElementById("textoEntrada")
t.value=t.value.toUpperCase()
}

function minusculo(){
let t=document.getElementById("textoEntrada")
t.value=t.value.toLowerCase()
}

function contar(){
let t=document.getElementById("contadorTexto").value.length
document.getElementById("totalCaracteres").innerText=t+" caracteres"
}

function gerarNumero(){
let min=parseInt(document.getElementById("min").value)
let max=parseInt(document.getElementById("max").value)

if(isNaN(min) || isNaN(max)){
alert("Digite números válidos")
return
}

let n=Math.floor(Math.random()*(max-min+1))+min
document.getElementById("numeroResultado").innerText=n
}

function extrairID(url){
if(url.includes("v=")){
return url.split("v=")[1].split("&")[0]
}
if(url.includes("youtu.be/")){
return url.split("youtu.be/")[1].split("?")[0]
}
return url
}

function baixarVideo(){
let url=document.getElementById("videoLink").value
let id=extrairID(url)

if(id){
window.open("https://ssyoutube.com/watch?v="+id)
}
}

let v=localStorage.getItem("visitas")||0
v++
localStorage.setItem("visitas",v)
document.getElementById("visitas").innerText="Total de visitas: "+v
