const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("new-cat-img");

const getCats = async() => {
	const data = await fetch(BASE_URL);
	.then((res) => res.json())
	.catch((e) = > console.log(e));
	
	return data.webpurl;
};

const loadImg = async() => {
	const catImg = document.getElementById("cat-img");
	catImg.src = await getCats();
};

catBtn.addEventListener("click", loadImg);

loadImg();
