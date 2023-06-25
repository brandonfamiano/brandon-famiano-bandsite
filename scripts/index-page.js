


const commentArray = [
{
    image:"",
    name: "Connor Walton",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reference. Let us appreciate this for what it is and what it contains.",
    datePosted: "3 days ago"
},
{
    image:"",
    name: "Emilie Beach",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    datePosted: "5 days ago"
},
{
    image: "",
    name: "Miles Acosta",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't Get enough.",
    datePosted: "5 days ago"
}
];

let container = document.querySelector(".comment__container");

commentArray.forEach((comment, index) =>{

    let newComment = document.createElement('li');
    let image = document.createElement('img');
    let name = document.createElement('h3');
    name.innerText = comment.name;
    let commentText = document.createElement('p');
    commentText.innerText = comment.comment;
    let datePosted = document.createElement('h4');
    datePosted.innerText = comment.datePosted;
    newComment.appendChild(image)
    newComment.appendChild(name)
    newComment.appendChild(datePosted)
    newComment.appendChild(commentText)
    container.appendChild(newComment);
})

