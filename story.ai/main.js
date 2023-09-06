//Navbar responsiveness
const mobile = document.getElementById("menu");
const navList = document.getElementById("hidden-menu");

//Updating images
const firstHeaderImage = document.getElementById("header-img");
const secondHeaderImage = document.getElementById("header-img1");

//Blog slides
const first = document.getElementById("first");
const second = document.getElementById("second")
const vl = document.getElementById("vl");

mobile.addEventListener("click", () =>{
    navList.classList.toggle("active");
});

updateImages = () =>{
    window.addEventListener("load", ()=>{
        //Changing images
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

    //Moving line
    moveRight= () =>{
        let position = 0;
     
        animate = () =>{
         if (position == 230){
             clearInterval(animation);
         }else{
             position ++;
             vl.style.left = position + "px";
         }
        }
        let animation = setInterval(animate, 15);

     
    
    
        //Works with appearing texts
         const duration = 2000; 
        const increment = 0.01;
    
        let opacity = 0;

        const appearInterval = setInterval(()=> {
        opacity += increment;
        first.style.opacity = opacity;

            if (opacity >= 1) {
                 clearInterval(appearInterval);
            }
         }, duration * increment);

         const secondAppearInterval = setInterval(() => {
            opacity += increment;
            second.style.opacity = opacity;

            if (opacity >= 1){
                clearInterval(secondAppearInterval);
            }
         }, duration * increment);
     }

}
updateImages();
moveRight();
appearInterval();
secondAppearInterval();