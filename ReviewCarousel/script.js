const content = document.getElementById("content")
const response = [
      {
        "id": 1,
        "author": "John Doe",
        "rating": 1,
        "picture":"https://randomuser.me/api/portraits/men/3.jpg",
        "comment": "Excellent product! It exceeded my expectations.",
        "date": "2023-08-25"
      },
      {
        "id": 2,
        "author": "Jane Smith",
        "rating": 4,
        "picture":"https://randomuser.me/api/portraits/men/1.jpg",
        "comment": "Good quality and fast shipping, but the price is a bit high.",
        "date": "2023-08-24"
      },
      {
        "id": 3,
        "author": "David Johnson",
        "rating": 5,
        "picture":"https://randomuser.me/api/portraits/men/4.jpg",
        "comment": "I love this product. It's worth every penny.",
        "date": "2023-08-23"
      },
      {
        "id": 4,
        "author": "Trevor Wilson",
        "rating": 3,
        "picture":"https://randomuser.me/api/portraits/men/5.jpg",
        "comment": "The product is okay, but it could use some improvements.",
        "date": "2023-08-22"
      },
      {
        "id": 5,
        "author": "Michael Brown",
        "rating": 4,
        "picture":"https://randomuser.me/api/portraits/men/6.jpg",
        "comment": "Great customer service, but the delivery took longer than expected.",
        "date": "2023-08-21"
      },
      {
        "id": 6,
        "author": "Stanley Anderson",
        "rating": 5,
        "picture":"https://randomuser.me/api/portraits/men/7.jpg",
        "comment": "Amazing product! I couldn't be happier with my purchase.",
        "date": "2023-08-20"
      },
      {
        "id": 7,
        "author": "Matthew Davis",
        "rating": 4,
        "picture":"https://randomuser.me/api/portraits/men/8.jpg",
        "comment": "Overall, a good experience. The product is solid.",
        "date": "2023-08-19"
      },
      {
        "id": 8,
        "author": "Mark Thompson",
        "rating": 3,
        "picture":"https://randomuser.me/api/portraits/men/9.jpg",
        "comment": "Decent product, but it arrived with some minor scratches.",
        "date": "2023-08-18"
      },
      {
        "id": 9,
        "author": "Adam White",
        "rating": 5,
        "picture":"https://randomuser.me/api/portraits/men/10.jpg",
        "comment": "I can't believe how well this product works. Highly recommended!",
        "date": "2023-08-17"
      },
      {
        "id": 10,
        "author": "Chris Taylor",
        "rating": 4,
        "picture":"https://randomuser.me/api/portraits/men/11.jpg",
        "comment": "Good value for the money. It does what it's supposed to do.",
        "date": "2023-08-16"
      }
    ]
const loadPage = (review) => {
  const reviewAuthor = document.getElementById("review-author")
    reviewAuthor.textContent = review.author
    const reviewPicture = document.getElementById("profile")
    reviewPicture.src = review.picture
    const reviewDate = document.getElementById("review-date")
    reviewDate.textContent = review.date
    const reviewComment = document.getElementById("review-comment")
    reviewComment.textContent = review.comment
    const reviewId = document.getElementById("review-id")
    reviewId.textContent = review.id
    for (let i=1;i<=5;i++){
      const reviewStar = document.getElementById(`${i}`)
      if(review.rating>=i){
        reviewStar.innerHTML = "&starf;"
      }
      else{
        reviewStar.innerHTML = "&star;"
      }
    }
}

const randomReview = ()=>{
    const randomNum = Math.floor(Math.random() * 10) + 1;
    const review = response[randomNum-1]
    loadPage(review)
}
const previousReview = () => {
  console.log("prev")
  const reviewElement = document.getElementById("review-id")
  if(reviewElement.innerText >1){
    const newIndex = parseInt(reviewElement.innerText) - 1;
    loadPage(response[newIndex-1])
    reviewElement.innerText = newIndex;
  }
}

const nextReview = () => {
  const reviewElement = document.getElementById("review-id")
  if(reviewElement.innerText<10){
    const newIndex = parseInt(reviewElement.innerText) + 1;
    loadPage(response[newIndex - 1]);
    reviewElement.innerText = newIndex;
  }
}
const supriseButton = document.getElementById("supriseButton")
supriseButton.addEventListener("click",randomReview)

const prevButton = document.getElementById("prevButton")
prevButton.addEventListener("click",previousReview)

const nextButton = document.getElementById("nextButton")
nextButton.addEventListener("click",nextReview)