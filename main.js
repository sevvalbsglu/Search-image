
runEvent();
function runEvent(){
    form.addEventListener("submit", search);
    clearButton.addEventListener("click",clear);

}
function clear(){
    searchinput.value="";
   // Array.from(imageList.children).forEach((child)=>child.remove())
    imageList.innerHTML="";

}

function search(e){
    imageList.innerHTML = "";

    const value=searchinput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method :"GET",
        headers: {
            Authorization: "Client-ID DnbFEjeOP4L1kVAVaLZEjhsDvBK1suQVNyUowyN29ss" //splash app key
        }
    })

    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        Array.from(data.results).forEach((image)=>{ //convert results in data to array and turn image
           // console.log(image.urls.small) directly urls>small>image called image 
            addImage(image.urls.small)
        })  
       

        })
    .catch((err)=>console.log(err))

    e.preventDefault();
}

    function addImage(url){
        console.log(imageList)
        const div=document.createElement("div");
        div.className="card";
        const img=document.createElement("img");
        img.setAttribute("src",url)
        img.height='400';
        img.width='400';
        
        div.append(img);
        imageList.append(div);

    }

