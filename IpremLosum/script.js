const randomSentences = [
        "The sunsets in the coastal town were a breathtaking display of vivid oranges and deep purples, casting a warm glow across the tranquil sea.",
        "After a long day at work, she looked forward to soaking in a hot bubble bath while listening to her favorite classical music playlist.",
        "The historic castle, with its towering stone walls and ornate turrets, stood as a testament to the grandeur of a bygone era.",
        "As the hikers ascended the steep mountain trail, the air grew thinner, and they marveled at the pristine wilderness surrounding them.",
        "With a camera in hand, he embarked on a photography expedition to capture the raw beauty of the untamed wilderness.",
        "The sprawling garden was a riot of color, with vibrant flowers of every hue swaying gently in the warm breeze.",
        "The old bookstore on the corner had a musty scent that transported visitors to a world of forgotten tales and dusty volumes.",
        "The chef meticulously crafted each dish, infusing it with a medley of flavors and textures that delighted the taste buds.",
        "In the heart of the bustling city, a hidden alleyway led to a quaint café where time seemed to stand still.",
        "The orchestra's performance was a symphony of harmony, filling the concert hall with a rich, melodic tapestry of sound.",
        "With a sense of adventure, they embarked on a road trip, exploring scenic routes and discovering hidden gems along the way.",
        "The ancient oak tree, with its gnarled branches and moss-covered trunk, seemed to whisper secrets of centuries gone by.",
        "As night fell, the city's skyline lit up with a dazzling array of neon lights, creating a mesmerizing urban landscape.",
        "The scientist conducted a series of intricate experiments, hoping to unlock the mysteries of the universe's fundamental forces.",
        "On a starry night, they gathered around a campfire, sharing stories and laughter under the vast expanse of the Milky Way."
];
let para  = 0
const formInput = document.getElementById("formInput")
const content = document.getElementById("IpremLosum")
const submitButton = document.getElementById("form")
submitButton.addEventListener("submit",function(e){
        e.preventDefault()
        para = parseInt(formInput.textContent)
        loadParagraph(para)
})

var loadParagraph = function(para){
        content.textContent = randomSentences.slice(0,para)
}