let blog = [
	{title: "Portfolio Page Up and Running",
	copy: "I've done it. I've gone and created my professional portfolio. Decided to go with a bit of a gamer/stereotypical hacker feel. Got a free stock image for my header image which instigated the black/green theme. Fonts were pulled from Google Fonts, which I have found is an essential resource for page-building. Most of the copy on the page is filler at the moment, which I will eventually replace with meaningful text.",
	date: "06/09/2017"
	},
	{title: "Javascript Added",
	copy: "Started inserting blog posts with Javascript. Soon the whole page will be manipulated by js. In my limited time as a coder, I've found js to be the language that draws my interest the most. Js is logic, and really tests your problem-solving skills. As someone who enjoys games and thought-exercises, it fits the way my mind works perfectly. I'm excited to learn js-based tools and continue on my path of being a software developer",
	date: "06/09/2017"
	}
];

const blogOutput = document.getElementById("blog");

function insertBlogPosts() {
	for (var i = 0, x = blog.length; i < x; i++) {
		blogOutput.innerHTML += 
		`<h4>${blog[i].title}</h4>
		<p>${blog[i].copy}</p>
		<date>${blog[i].date}</date>`
	}
}

insertBlogPosts();