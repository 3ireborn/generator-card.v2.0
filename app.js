/* ======================================================
   NPA SMART SYSTEM CARD GENERATOR V2.0
   app.js
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

const memberName = document.getElementById("memberName");
const memberID = document.getElementById("memberID");
const memberLevel = document.getElementById("memberLevel");

const previewName = document.getElementById("previewName");
const previewID = document.getElementById("previewID");

const vipTitle = document.querySelector(".vipArea h2");

const logoUpload = document.getElementById("logoUpload");
const photoUpload = document.getElementById("photoUpload");

/*=========================================
  DEFAULT
=========================================*/

previewName.textContent = "NAMA MEMBER";
previewID.textContent = "000022061970";

if(vipTitle){

vipTitle.textContent="VVIP MEMBER";

}

/*=========================================
  NAMA MEMBER
=========================================*/

memberName.addEventListener("input",()=>{

let value = memberName.value.trim();

if(value===""){

value="NAMA MEMBER";

}

previewName.textContent=value.toUpperCase();

autoResizeName();

});

/*=========================================
  ID MEMBER
=========================================*/

memberID.addEventListener("input",()=>{

let value=memberID.value.trim();

if(value===""){

value="000022061970";

}

previewID.textContent=value;

autoResizeID();

});

/*=========================================
  LEVEL MEMBER
=========================================*/

memberLevel.addEventListener("change",()=>{

vipTitle.textContent=

memberLevel.value.toUpperCase()+" MEMBER";

});

/*=========================================
  AUTO RESIZE NAME
=========================================*/

function autoResizeName(){

const length=previewName.textContent.length;

if(length<18){

previewName.style.fontSize="30px";

}

else if(length<24){

previewName.style.fontSize="26px";

}

else if(length<30){

previewName.style.fontSize="22px";

}

else{

previewName.style.fontSize="18px";

}

}

/*=========================================
  AUTO RESIZE ID
=========================================*/

function autoResizeID(){

const length=previewID.textContent.length;

if(length<16){

previewID.style.fontSize="22px";

}

else{

previewID.style.fontSize="18px";

}

}

/*=========================================
  LOGO UPLOAD
=========================================*/

logoUpload.addEventListener("change",(e)=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(evt){

let logo=document.getElementById("dynamicLogo");

if(!logo){

logo=document.createElement("img");

logo.id="dynamicLogo";

logo.style.position="absolute";

logo.style.top="25px";

logo.style.left="35px";

logo.style.width="70px";

logo.style.height="70px";

logo.style.objectFit="contain";

logo.style.zIndex="99";

document.getElementById("card").appendChild(logo);

}

logo.src=evt.target.result;

}

reader.readAsDataURL(file);

});

/*=========================================
  PHOTO UPLOAD
=========================================*/

photoUpload.addEventListener("change",(e)=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(evt){

let photo=document.getElementById("memberPhoto");

if(!photo){

photo=document.createElement("img");

photo.id="memberPhoto";

photo.style.position="absolute";

photo.style.right="40px";

photo.style.top="150px";

photo.style.width="120px";

photo.style.height="150px";

photo.style.objectFit="cover";

photo.style.borderRadius="16px";

photo.style.border="2px solid rgba(246,196,83,.7)";

photo.style.boxShadow="0 0 20px rgba(246,196,83,.35)";

photo.style.zIndex="90";

document.getElementById("card").appendChild(photo);

}

photo.src=evt.target.result;

}

reader.readAsDataURL(file);

});

/*=========================================
  CARD TILT
=========================================*/

const card=document.getElementById("card");

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/
