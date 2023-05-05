const baseURL = 'images/';
const imageURLs = [
	"1683165695436", 
	"1683167702262", 
	"1683168309495", 
	"1683168457216", 
	"1683168520280", 
	"1683169298196", 
	"1683169373631", 
	"1683169523229", 
	"1683169728026", 
	"1683169796655", 
	"1683169870841", 
	"1683169947414", 
	"1683170004402",
	"1683252095203",
	"1683252129442",
	"1683252197961",
	"1683252263115",
	"1683252272081",
	"1683252341487",
	"1683252374744",
	"1683252417542",
	"1683252459912",
	"1683252503268",
	"1683252551182",
	"1683252596170",
	"1683252624366",
	"1683252640633",
	"1683252668541",
	"1683252693977",
	"1683252713538",
	"1683252762312",
	"1683252797219",
	"1683252808782",
	"1683252834872",
	"1683252856783",
	"1683252878771",
	"1683252894532",
	"1683252952266",
	"1683252991039",
	"1683253132331",
	"1683253161450",
	"1683253176930",
	"1683253240934",
	"1683253264032",
	"1683253287661",
	"1683253317968",
	"1683253336066",
	"1683253356087",
	"1683253435201",
	"1683253459282",
	"1683253492216",
	"1683253528047",
	"1683253561869",
	"1683253570236",
	"1683253589835",
	"1683253597281",
	"1683253731725",
	"1683253767930",
	"1683253790774",
	"1683253795712",
	"1683253819475",
	"1683253855557",
	"1683253928036",
	"1683253935824",
	"1683253963639",
	"1683253970495",
	"1683253982348",
	"1683254165164",
	"1683254207658",
	"1683254638520",
	"1683254681627",
	"1683254701298",
	"1683254739051",
	"1683254745503",
	"1683254764273",
	"1683254770098",
	"1683254802202",
	"1683254830928",
	"1683254873862",
	"1683254929580",
	"1683254936672"
].map(k=>baseURL + k + '.jpg');

let toonImages = [];
const getToonImage = _=>{
	if (!toonImages.length) {
		toonImages = imageURLs.slice().sort(_=>Math.random() - 0.5)
	}

	return toonImages.pop();
}

const el = document.querySelector('.leo-box');

const init = _=>{

	const {offsetWidth, offsetHeight} = document.documentElement;

	const width = 120;

	const row = Math.floor(offsetWidth / (width + 4));
	const col = Math.floor(offsetHeight / (width + 4));

	const images = new Array(row * col).fill('').map((v,i)=>`<div class="leo" style="background-image:url(${getToonImage()})"></div>`);

	el.innerHTML = images.join('');
	const allWidth = row * (width + 4);
	const allHeight = col * (width + 4);
	el.style.width = `${allWidth}px`;
	el.style.height = `${allHeight}px`;
	leoArr = [];
}

let leoArr = [];
const step = _=>{
	if (!leoArr.length) {
		leoArr = [...el.children].slice().sort(_=>Math.random() - 0.5);
	}
	const leo = leoArr.pop();
	const src = getToonImage();
	const image = new Image();
	image.onload = _=>{
		setTimeout(_=>{
			leo.style.backgroundImage = `url(${src})`;
			setTimeout(step, 8000 / el.children.length);
		}
		, 16);
	}
	;
	image.src = src;
}

let timer;
init();

window.onresize = _=>{
	clearTimeout(timer);
	timer = setTimeout(init, 300);
}
step();