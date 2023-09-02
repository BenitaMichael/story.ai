const mobile = document.getElementById("menu");
const navList = document.getElementById("hidden-menu");

const firstHeaderImage = document.getElementById("header-img");
const secondHeaderImage = document.getElementById("header-img1");

mobile.addEventListener("click", () =>{
    navList.classList.toggle("active");
});

updateImages = () =>{
    window.addEventListener("load", ()=>{
        toggleImage = () =>{
            if (firstHeaderImage.src.includes("Property_1_Variant1.png")) {
                firstHeaderImage.src = "images/Modern cute chatbot illustration set 3.png";
            } else {
                firstHeaderImage.src = "images/Property_1_Variant1.png";
            }
        }

        imageToggle = () =>{
            if(secondHeaderImage.src.includes("Property_1_Variant2.png")){
                secondHeaderImage.src = "images/Modern cute chatbot illustration set 4.png"
            }else{
                secondHeaderImage.src = "images/Property_1_Variant2.png"
            }
        }

        setInterval(toggleImage, 1000);
        setInterval(imageToggle, 1000)

    })
}
updateImages();