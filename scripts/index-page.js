class Comment {
  constructor(name, comment, id, likes, timestamp){
    this.name = name;
    this.comment = comment;
    this.id= id;
    this.likes = likes;
    this.timestamp = new Date(timestamp);
  }
  render(){
    return Comment;
  }
}

const getComments = () => {
  return axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=brandon-famiano")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching comments", error);
      return [];
    });
};
const commentArray = [
]
getComments().then((defaultComments) => {
  commentArray.push(...defaultComments);
  renderComments();
});
const newDatePosted = new Date().toLocaleString();
var container = document.querySelector(".comment__container");
var form = document.getElementById("form");


function renderComments() {
  container.innerHTML = '';
  commentArray.forEach((comment, index) => {
    let newComment = document.createElement('li');
    let image = document.createElement('img');
    image.src ="assets/images/blank.jpg";
    let name = document.createElement('h3');
    name.innerText = comment.name;
    let datePosted = document.createElement('h4');
    datePosted.innerText = newDatePosted + "\n";
    let commentText = document.createElement('p');
    commentText.innerText = comment.comment;
    

    newComment.appendChild(image);
    newComment.appendChild(name);
    newComment.appendChild(datePosted);
    newComment.appendChild(commentText);
    container.appendChild(newComment);
  });
}

function postComment(comment) {
  axios.post("https://project-1-api.herokuapp.com/comments?api_key=brandon-famiano", comment)
    .then((response) => {
      commentArray.push(response.data);
      renderComments();
    })
    .catch((error) => {
      console.error("Error posting comment", error);
    });
}


submit.onclick = function(e) {
  e.preventDefault();

  
let errorbar1 = document.querySelector(".comment__form-name");
let errorbar2 = document.querySelector(".comment__form-text");

errorbar1.classList.remove("error");
errorbar2.classList.remove("error");

  let newName = document.getElementById("name").value;
  let newCommentText = document.getElementById("comment").value;
  if (!newName || !newCommentText) {
    if (!errorbar1.value){
    errorbar1.classList.add("error");
    }
    if (!errorbar2.value){
      errorbar2.classList.add("error");
    }
    return;
  }
  let comment = {
    image: "/assets/images/Mohan-muruge",
    name: document.getElementById("name").value,
    datePosted: newDatePosted,
    comment: document.getElementById("comment").value,
    
  };
  commentArray.splice(0,0, comment);

  renderComments();
  form.reset();
};
renderComments();