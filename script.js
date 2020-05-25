const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");




const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");



/*-----------------------------------Add Effects--------------------------------*/
var dictionary = {"xpro2-add":"contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg)",
					"toaster-add":"sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)",
					"sutro-add":"brightness(0.75) contrast(1.3) sepia(0.5) hue-rotate(-25deg)",
					"mayfair-add":"saturate(1.4) contrast(1.1)",
					"kelvin-add":"sepia(0.4) saturate(2.4) brightness(1.3) contrast(1)",
					'inkwell-add':"grayscale(1) brightness(1.2) contrast(1.05)",
					"brannan-add":'sepia(0.5) contrast(1.4)',
					"amaro-add":" hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5)",
					"none":"none"} 
	// dictionary contain proprty : class of the  button , value : css effects add on canvas 

function add_effects(filterclass){
	const file = uploadFile.files[0];
	const reader = new FileReader();
	
	if (file){
		fileName = file.name;
		reader.readAsDataURL(file);
	}
	//Add image to a canvas
	reader.addEventListener("load",() =>{
		img = new Image();
		img.src = reader.result;
		
		
		img.addEventListener("load" , () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.filter = dictionary[filterclass];
			ctx.drawImage(img,0,0,img.width,img.height);
			
		});
	},false);
};

document.addEventListener("click",(event) => {

	if(event.target.classList.contains("filter-btn")){
		add_effects(event.target.classList[1]);		
	}
	else if(event.target.id==="revert-btn"){
		add_effects("none")
	}

});




/*-----------------------------Upload File--------------------------------*/
uploadFile.addEventListener("change", (event) => {
	const file = uploadFile.files[0];
	const reader = new FileReader();
	
	if (file){
		fileName = file.name;
		reader.readAsDataURL(file);
	}
	//Add image to a canvas
	reader.addEventListener("load",() =>{
		img = new Image();
		img.src = reader.result;
		img.addEventListener("load" , () => {
			canvas.width = img.width;
			canvas.height = img.height;

			ctx.drawImage(img,0,0,img.width,img.height);
			
		});
	},false);
});

/*------------------------------- Download Event-------------------------------*/

downloadBtn.addEventListener("click", () => {
  	// Get ext
	const fileExtension = fileName.slice(-4);

	// Init new filename
	let newFilename;

	  // Check image type
	if (fileExtension === ".jpg" || fileExtension === ".png") {
	    // new filename
		newFilename = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
	}

	// Call download
	download(canvas, newFilename);
});

// Download
function download(canvas, filename) {
	// Init event
	let e;
	// Create link
	const link = document.createElement("a");

	// Set props
	link.download = filename;
	  
	// imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

	link.href = canvas.toDataURL("image/jpeg", 0.8);
	console.log(canvas,link.href)
	// New mouse event
	e = new MouseEvent("click");
	// Dispatch event
	link.dispatchEvent(e);
}