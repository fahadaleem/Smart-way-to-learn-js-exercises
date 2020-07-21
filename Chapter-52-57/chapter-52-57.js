// Create function constructor for each image object

var Images = function(path, title, description)
{
    this.path = path;
    this.title= title;
    this.description = description;
}

Images.prototype.showData = function(){
    document.querySelector(".modal-section").classList.add("modal-open");
    document.querySelector("#modal-img").src = this.path;
    document.querySelector("#header-text").textContent = this.title;
    document.querySelector("#modal-footer").textContent = this.description;
}

var imageArr = [];
// Instances of Images constructor
var img1 = new Images("images/1.jpg", "Salar de Uyuni, Bolivia", "The world’s largest salt flat, it creates a mirror effect after the rain.");
var img2 = new Images("images/2.jpg", "Cinque Terre, Rio Maggiore, Italy", "The “5 Lands” of colored homes perched on a cliff by the sea.");
var img3 = new Images("images/3.jpg", "Blue Lagoon, Iceland", "Natural thermal hot springs.");
var img4 = new Images("images/4.jpg", "Maldives", "This archipelago is the ultimate tropical island paradise.");
var img5 = new Images("images/5.jpg", "Glass Beach, California, USA", "A beach buried in colorful sea glass.");
var img6 = new Images("images/6.jpg", "Santorini, Greece", "Iconic blue and white buildings on a cliff by the sea.");
var img7 = new Images("images/7.jpg", "Neuschwanstein Castle, Germany", "The gorgeous former castle of the king.");
var img8 = new Images("images/8.jpg", "Aogashima Volcano, Japan", "A small village living in a volcanic island.");
var img9 = new Images("images/9.jpg", "Venice, Italy", "The city of colorful winding corridors and canals, and good food.");
var img10 = new Images("images/10.jpg", "Havasu Falls, Grand Canyon, Arizona, USA", "In Grand Canyon National Park is this majestic waterfall.");
var img11 = new Images("images/11.jpg", "Swiss Alps, Switzerland", "The epic and majestic mountain range.");
var img12 = new Images("images/12.jpg", "Iceland", "A vast winter and a perfect place to watch the aurora.");
var img13 = new Images("images/13.jpg", "Positano, Almalfi Coast, Italy", "Storybook town on a cliff by the sea.");
var img14 = new Images("images/14.jpg", "Rio de Janeiro, Brazil", "The iconic statue overlooking the city.");
var img15 = new Images("images/15.jpg", "Aansu lake, Pakistan", 'The name "Ansoo" comes from its tear-like shape (the Urdu word Ansoo means teardrop). The lake also resembles a human eye with a central ice island resembling the iris and a ridge resembling an eyebrow, which becomes even more prominent when ice melts on the "eyebrow" during the summer.');

//Push all the instances into an array
imageArr.push(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15);
var img_container = document.querySelector("#image-container");

var timeset;

//function to open the modal on click on image
var openModel = function(){
    var img_src = this.src;
    var index = img_src.indexOf("images");
    var img_src = img_src.slice(index,);
    imageArr.forEach(function(curr){
        if(img_src===curr.path)
        {
            curr.showData();
        }
    })

    //Disappear automatically after 3 sec
   timeset= setTimeout(function(){
        document.querySelector(".modal-section").classList.remove("modal-open");
    },5000);

};


//Loop over the image arr to fetch the path of the image and display on window
imageArr.forEach(function(curr){
    var imgHtml = '<img src="%source%" alt="" class="img">'
    imgHtml = imgHtml.replace("%source%", curr.path);
    img_container.insertAdjacentHTML("beforeend", imgHtml);
})


// Loop all the image elements to add the event listener

var img_elements = document.querySelectorAll("img");

// Convert img_elements NodeList to an Array
var img_elements = Array.prototype.slice.call(img_elements);
img_elements.forEach(function(curr){
    curr.addEventListener("click", openModel);
})


//Close button Code
var close = function(){
    document.querySelector(".modal-section").classList.remove("modal-open");
    clearTimeout(timeset);
}

document.querySelector("#close-btn").addEventListener("click",close);