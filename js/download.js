/* ======================================================
   NPA SMART SYSTEM CARD GENERATOR V2.0
   download.js
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

const btn = document.getElementById("downloadCard");
const card = document.getElementById("card");
const inputName = document.getElementById("memberName");

if (!btn || !card) return;

btn.addEventListener("click", async () => {

    const originalText = btn.innerHTML;
    const originalTransform = card.style.transform;
    const originalTransition = card.style.transition;

    try{

        btn.disabled = true;

        btn.innerHTML = "⏳ MEMPROSES...";

        card.style.transform = "none";
        card.style.transition = "none";

        await new Promise(resolve => setTimeout(resolve,200));

        const canvas = await html2canvas(card,{

            scale:4,

            useCORS:true,

            allowTaint:true,

            backgroundColor:"#000000",

            logging:false

        });

        let fileName =
            inputName.value.trim() || "NPA-Member";

        fileName = fileName
            .replace(/\s+/g,"-")
            .replace(/[^\w\-]/g,"");

        const link = document.createElement("a");

        link.download = fileName + ".png";

        link.href = canvas.toDataURL("image/png",1);

        link.click();

        btn.innerHTML="✅ BERHASIL";

        btn.style.background="#16a34a";

    }catch(err){

        console.error(err);

        alert("Gagal membuat kartu.");

        btn.innerHTML="❌ GAGAL";

        btn.style.background="#dc2626";

    }

    finally{

        card.style.transform=originalTransform;
        card.style.transition=originalTransition;

        setTimeout(()=>{

            btn.disabled=false;

            btn.innerHTML=originalText;

            btn.style.background="";

        },2500);

    }

});

});
