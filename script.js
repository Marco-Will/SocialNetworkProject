let posts = 
[
  {
    'author': 'Marco' ,
    'authorPic': ' <img class="profile_picture" src="img/user1.png" alt="">',
    'image': '<img class="post_img" src="img/post3.jpg" alt="">',
    'desc': '🎮time for some rounds🎮',
    "comment": [],
    "likes":  '145',
    "liked":  /* [false] */ false 
  },

  {
    'author': 'Caro',
    'authorPic': ' <img class="profile_picture" src="img/newuser.jpg" alt="">',
    'image': '<img class="post_img" src="img/post1.jpg" alt="">',
    'desc': 'Fresh and tasty! ',
    "comment": [],
    "likes":  [355],
    "liked":/*  [false] */   false 
  },

  {
    'author': 'Tracy',
    'authorPic': ' <img class="profile_picture" src="img/user3.jpg" alt="">',
    'image': '<img class="post_img" src="img/post2.jpg" alt="">',
    'desc': 'Print era over soon? ',
    "comment": [],
    "likes":  [23],
    "liked":  /* [false] */  false 
  },

  {
    'author': 'Sophia',
    'authorPic': ' <img class="profile_picture" src="img/user4.jpg" alt="">',
    'image': '<img class="post_img" src="img/post4.jpg" alt="">',
    'desc': '🌍 Vacations!!! ✈️',
    "comment": [],
    "likes":  [53],
    "liked":  /* [false] */  false 
  },

  {
    'author': 'Emily ',
    'authorPic': ' <img class="profile_picture" src="img/user5.jpg" alt="">',
    'image': '<img class="post_img" src="img/post5.jpg" alt="">',
    'desc': 'Time to relax^^',
    "comment": [],
    "likes":  [66],
    "liked":  /* [false] */ false 
  },

  {
    'author': 'Freddie ',
    'authorPic': ' <img class="profile_picture" src="img/user6.jpg" alt="">',
    'image': '<img class="post_img" src="img/post6.jpg" alt="">',
    'desc': 'Amazing view and vibes...',
    "comment": [],
    "likes":  [75],
    "liked": /* [false] */ false 
  },

  {
    'author': 'William ',
    'authorPic': ' <img class="profile_picture" src="img/user7.jpg" alt="">',
    'image': '<img class="post_img" src="img/post7.jpg" alt="">',
    'desc': 'New car, who wants a ride? ;D',
    "comment": [],
    "likes":  [687],
    "liked": /* [false]  */ false 
  },
]
let user = 'Marco';
let follow = ['Follow'];
let darkmode = false;
/* let likes = [145, 504,]; */


function filterPosts()//filter posts by names
{
  let search = getId('search').value;
      search = search.toLowerCase() //converts big to little chars
      console.log(search);

      getId('postContainer').innerHTML = ' ';

      for (let i = 0; i < posts.length; i++) 
      {
        let post = posts[i];
        
        if(post['author'].toLowerCase().includes(search)) //if search input contains a char matching the user names then filter and show
        {
        getId('postContainer').innerHTML += 
        
        /*html*/ `
        <div class="post">
    
                    <div class="post_header">
                        <div class="user">
                            ${post['authorPic']}
                            <span class="user_name">${post['author']}</span>
                        </div>
                        <img class="drop_down" src="icons/question-mark-6-48.png" alt="">
                    </div>
                    
                    ${post['image']}
                    
                    <div class="post_comment">${post['desc']} </div>
    
                    <div class="like_comment_share">
    
                        <img  onclick="likeComment(${i})" id="emptyHeart${i}" src="icons/empty_heart.png" alt="">
                        <img src="icons/comments-48.png" alt="">
                        <img onclick="showInfo()" src="icons/sharethis-32.png" alt="">
    
                    </div>
    
                    <div id="likeCount${i}" class="like_number">👍${post['likes']}</div>
    
                    <div id="newComment${i}" class="see_comments">
    
                   
                    </div>
        
    
    
                  <div class="comment_input">
                      <textarea id="comment${i}"  style="resize: none;" onkeyup="textAreaAdjust(this)" placeholder="Comment..." cols="44" rows="1" minlength="1" maxlength="500" required></textarea>
                      <button onclick="addComment(${i})">Post</button>
                  </div>
    
          </div> `;
    
          let postcontent = getId(`newComment${i}`);
    
          for (let j = 0; j < post['comment'].length; j++) 
          {
            const comment = post['comment'][j];
            
            postcontent.innerHTML += `
            <div  class="new_comment">
    
              <b> ${user} :</b>
              ${comment}
            </div> `;
        }
          
      }
    }

}

function renderNewsFeed()
{
  for (let i = 0; i < posts.length; i++) 
  {
    const post = posts[i];

    getId('newsWindow').innerHTML +=' ';
    getId('newsWindow').innerHTML +=` 
    <div class="new_posts">
      ${post['authorPic']}
      <span>${post['author']}</span>
    </div> ` 
  }
}

function render() //render posts and newsfeed
{
  getId('postContainer').innerHTML = ' ';

  for (let i = 0; i < posts.length; i++) 
  {
    const post = posts[i];
  
    getId('postContainer').innerHTML += 
    
    /*html*/ `
    <div class="post">

                <div class="post_header">
                    <div class="user">
                        ${post['authorPic']}
                        <span class="user_name">${post['author']}</span>
                    </div>
                    <img class="drop_down" src="icons/question-mark-6-48.png" alt="">
                </div>
                
                ${post['image']}
                
                <div class="post_comment">${post['desc']} </div>

                <div class="like_comment_share">

                    <img  onclick="likeComment(${i})" id="emptyHeart${i}" src="icons/empty_heart.png" alt="">
                    <img src="icons/comments-48.png" alt="">
                    <img onclick="showInfo()" src="icons/sharethis-32.png" alt="">

                </div>

                <div id="likeCount${i}" class="like_number">👍${post['likes']}</div>

                <div id="newComment${i}" class="see_comments">

               
                </div>
    


              <div class="comment_input">
                  <textarea id="comment${i}"  style="resize: none;" onkeyup="textAreaAdjust(this)" placeholder="Comment..." cols="44" rows="1" minlength="1" maxlength="500" required></textarea>
                  <button onclick="addComment(${i})">Post</button>
              </div>

      </div> `;

      let postcontent = getId(`newComment${i}`);

      for (let j = 0; j < post['comment'].length; j++) 
      {
        const comment = post['comment'][j];
        
        postcontent.innerHTML += `
        <div  class="new_comment">

          <b> ${user} :</b>
          ${comment}
        </div> `;
    }
      
  }
}


 function followUser(i)
{
  getId(`followText${i}`).innerHTML = 'Unfollow ';
} 

function renderSidebar()//render sidebar with other user
{
  for (let i = 0; i < follow.length; i++) {
    let followuser = follow[i];

    getId('suggestionUser').innerHTML = /*html*/`
  <div class="current_acc">

    <img class="profile_picture" src="img/user2.jpg" alt="">
    <span>Francis</span>
    <a class="follow_line" onclick="followUser(${i})" id="followText${i}" >${followuser}</a>

  </div>

  <div class="current_acc">

    <img class="profile_picture" src="img/newuser2.jpg" alt="">
    <span>Mike</span>
    <a class="follow_line" onclick="followUser(${i})" id="followText${i}" >${followuser}</a>

  </div>

  <div class="current_acc">

    <img class="profile_picture" src="img/newuser3.jpg" alt="">
    <span>Jack</span>
    <a class="follow_line" onclick="followUser(${i})" id="followText${i}" >${followuser} </a>

  </div> `
    
  }
  
}

function likeComment(i)//like and dislike posts
{
  let like = getId(`emptyHeart${i}`);
  let liked = posts[i]['liked'];

  if(!liked)
  {
    posts[i]['liked'] = true;
    /* liked = true; */ //warum geht es so nicht?
    like.src = 'icons/fullHeart.png'
    posts[i]['likes']++;
    
  }

  else 
  {
    /* liked = false; */ //warum geht es so nicht?
    posts[i]['liked'] = false;
    like.src = 'icons/empty_heart.png'
    posts[i]['likes']--;
    
  }

  
   
  getId(`likeCount${i}`).innerHTML = ' '; 
  getId(`likeCount${i}`).innerHTML = `👍${posts[i]['likes']}`;
}


function addComment(i)//add comments to posts
{
  let comment = getId(`comment${i}`).value;

  if( comment == 0)
  {
    alert('Please enter your message first!')
   
  }
  else 
  {
    posts[i]['comment'].push(comment);

    render();
    comment.value = ' ';
  }
}

async function includeHTML() 
{
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) 
    {
      const element = includeElements[i];
      file = element.getAttribute("w3-include-html"); // "includes/header.html"
      let resp = await fetch(file);
      if (resp.ok) 
      {
        element.innerHTML = await resp.text();
      } else 
      {
        element.innerHTML = "Page not found";
      }
    }
  }


  function getId(id) //calling id's of elements
  {
    return document.getElementById(id);
  }

  function textAreaAdjust(element) //auto resize
  {
    element.style.height = "1px";
    element.style.height = (10+element.scrollHeight)+"px";
  }

  function showInfo()
  {
    

  var width = 625 ;
  var height = 425 ;

  x = window.event.screenX;
  y = window.event.screenY;
                                                                              
  msgWindow=open( document.forms[0].SourceDBredirectto.value + "/INVS?OpenForm&InvoiceKey=" + document.forms[0].InvoiceKey.value , "", 'toolbar=no,location=no,directories=no,modal=yes,status=no,menubar=no,scrollbars=yes,resizable=no, top=' + y + ',screenY=' + y + ',left=' + x + ',screenX=' + x + ',width=' + width + ',height=' + height);
  if (msgWindow.opener == null) msgWindow.opener = self;


  }




function darkMode()
{
 

  if(!darkmode)
  {
    darkmode = true;
    darkModeOn();
    
  }
  else
  {
    darkmode = false;
    darkModeOff();
  }
  
}

  function darkModeOn()
  {
    getId('bgr').classList.add('dark_mode');
    getId('header').classList.add('dark_mode');
    getId('navIcon').classList.add('dark_mode_invert');
    getId('navIcon2').classList.add('dark_mode_invert');
    getId('navIcon3').classList.add('dark_mode_invert');
    getId('mobileNavBar').classList.add('dark_mode');
    getId('mobileNavIcon').classList.add('dark_mode_invert');
    getId('mobileNavIcon2').classList.add('dark_mode_invert');
    getId('mobileNavIcon3').classList.add('dark_mode_invert');
    
  }
  function darkModeOff()
  {
    getId('bgr').classList.remove('dark_mode');
    getId('header').classList.remove('dark_mode');
    getId('navIcon').classList.remove('dark_mode_invert');
    getId('navIcon2').classList.remove('dark_mode_invert');
    getId('navIcon3').classList.remove('dark_mode_invert');
    getId('mobileNavBar').classList.remove('dark_mode');
    getId('mobileNavIcon').classList.remove('dark_mode_invert');
    getId('mobileNavIcon2').classList.remove('dark_mode_invert');
    getId('mobileNavIcon3').classList.remove('dark_mode_invert');
  }