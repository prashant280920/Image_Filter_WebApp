const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let filename='';

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");


/*---------------------- To do filter -------------------*/

var brightness = 0, contrast = 0, saturation = 0, vibrance = 0; //Initialasize the value
const br = document.getElementById("brightness");
const co = document.getElementById("contrast");
const sa = document.getElementById("saturation");
const vi = document.getElementById("vibrance");

//Changing filters on clicking buttons
document.addEventListener("click",(event) => {
	if(event.target.classList.contains("filter-btn")){
		//For Brightness
		if(event.target.classList.contains("brightness-add")){
			Caman("#canvas",img,function(){
				this.brightness(+5).render();
				brightness+=5;
				br.value = brightness;
			});

		}
		else if(event.target.classList.contains("brightness-remove")){
			Caman("#canvas",img,function(){				
				this.brightness(-5).render();		
				brightness-=5;
				br.value = brightness;

			});

		}
		// For Contrast
		else if(event.target.classList.contains("contrast-add")){
			Caman("#canvas",img,function(){
				
				this.contrast(+5).render();
				contrast+=5;
				co.value = contrast;
			});

		}
		else if(event.target.classList.contains("contrast-remove")){
			Caman("#canvas",img,function(){
				this.contrast(-5).render();
				contrast-=5;
				co.value = contrast;
			});

		}
		// For Saturation
		else if(event.target.classList.contains("saturation-add")){
			Caman("#canvas",img,function(){
				this.saturation(+5).render();
				saturation+=5;
				sa.value = saturation;
			});

		}
		else if(event.target.classList.contains("saturation-remove")){
			Caman("#canvas",img,function(){
				this.saturation(-5).render();
				saturation-=5;
				sa.value = saturation;
			});

		}
		// For Vibrance
		else if(event.target.classList.contains("vibrance-add")){
			Caman("#canvas",img,function(){
				this.vibrance(+5).render();
				vibrance+=5;
				vi.value = vibrance;
			});

		}
		else if(event.target.classList.contains("vibrance-remove")){
			Caman("#canvas",img,function(){
				this.vibrance(-5).render();
				vibrance-=5
				vi.value = vibrance;

			});

		}
		else if(event.target.classList.contains("vintage-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.vintage().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;
				br.value = brightness;
				co.value = contrast;
				sa.value = saturation;
				vi.value = vibrance;
			});

			

		}
		else if(event.target.classList.contains("Lomo-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.lomo().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;

			});

		}
		else if(event.target.classList.contains("clarity-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.clarity().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;
				br.value = brightness;
				co.value = contrast;
				sa.value = saturation;
				vi.value = vibrance;
			});

		}
		else if(event.target.classList.contains("sincity-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.sinCity().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;
				br.value = brightness;
				co.value = contrast;
				sa.value = saturation;
				vi.value = vibrance;
			});

		}
		else if(event.target.classList.contains("crossprocess-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.crossProcess().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;
				br.value = brightness;
				co.value = contrast;
				sa.value = saturation;
				vi.value = vibrance;
			});

		}
		else if(event.target.classList.contains("pinhole-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.pinhole().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;
				br.value = brightness;
				co.value = contrast;
				sa.value = saturation;
				vi.value = vibrance;
			});

		}
		else if(event.target.classList.contains("nostalgia-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.nostalgia().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;
				br.value = brightness;
				co.value = contrast;
				sa.value = saturation;
				vi.value = vibrance;
			});

		}
		else if(event.target.classList.contains("hermajesty-add")){
			Caman("#canvas",img,function(){
				this.revert();
				this.herMajesty().render();
				brightness = 0; contrast = 0; saturation = 0; vibrance = 0;
				br.value = brightness;
				co.value = contrast;
				sa.value = saturation;
				vi.value = vibrance;
			});

		}
	}
});
//Changing filters on changing slider
// br.addEventListener('change',() => {
// 	Caman("#canvas",img,function(){
// 		this.revert();
// 		brightness = parseInt(br.value);
// 		this.brightness(brightness).render();
		
// 	});
// });
// co.addEventListener('change',() => {
// 	Caman("#canvas",img,function(){
// 		this.revert();
// 		contrast = parseInt(co.value);
// 		this.bcontrast(contrast).render();
// 	});
// });
// sa.addEventListener('change',() => {
// 	Caman("#canvas",img,function(){
// 		this.revert();
// 		saturation = parseInt(sa.value);
// 		this.saturation(saturation).render();
// 	});
// });
// vi.addEventListener('change',() => {
// 	Caman("#canvas",img,function(){
// 		this.revert();
// 		vibrance = parseInt(vi.value);
// 		this.vibrance(vibrance).render();
// 	});
// });

//Revert Filter
revertBtn.addEventListener("click", e => {
	Caman("#canvas", img, function(){
		this.revert();
	});
});


//Upload File
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

