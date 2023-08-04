//SIDE BAR
const menuItems = document.querySelectorAll('.menu-item');
const them = document.querySelector('.notifications-popup');
//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const backgroundColorChange = document.querySelectorAll('.choose-bg > div');
const backgroundColorSpan = document.querySelectorAll('.choose-bg > div span');

//FRIEND REQUEST
const requestDisplay = document.querySelector('.friend-requests');
const request = document.querySelector('.Request-item');
const requests = document.querySelectorAll('.request');
const requestCategory = document.querySelector('.request-category');
const requestsNumber = document.querySelector('.request-category span');
const request1 = document.querySelector('.requests-1');
const requestReject1 = document.querySelector('.requests-reject-1');
const request2 = document.querySelector('.requests-2');
const requestReject2 = document.querySelector('.requests-reject-2');
const request3 = document.querySelector('.requests-3');
const requestReject3 = document.querySelector('.requests-reject-3');
const request4 = document.querySelector('.requests-4');
const requestReject4 = document.querySelector('.requests-reject-4');
const request5= document.querySelector('.requests-5');
const requestReject5 = document.querySelector('.requests-reject-5');
const request6 = document.querySelector('.requests-6');
const requestReject6 = document.querySelector('.requests-reject-6');


//DISPLAY PROFILE PHOTOS
const profilePhoto = document.getElementById('photo');


//POST
const postInput = document.querySelector('.create-posts');
const posted = document.querySelector('.posted');
const icon = document.querySelector('.icon')

//SLIDE OUT 
const slide = document.querySelector('.slide');
const left = document.querySelector('.left');
const slide2 = document.querySelector('.slide-2');


// ============================ SIDEBAR =========================

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
           
        }
    })
})

// ============================ MESSAGES =========================



function filterItems() {
    const input = document.getElementById('message-search').value.toLowerCase();
    const items = document.querySelectorAll('.message');

    items.forEach(item => {
      const itemName = item.textContent.toLowerCase();
      if (itemName.includes(input)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Attach the filterItems function to the input field's 'keyup' event
  document.getElementById('message-search').addEventListener('keyup', filterItems);

//highlights message card when messages menu is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    },2000);
   messages.classList.toggle('displayed')
});



//THEME CUSTOMIZATION

//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = "none"
    }
}


//close modal

themeModal.addEventListener('click',closeThemeModal)
theme.addEventListener('click',openThemeModal)



// ================================= FONT SIZES =======================

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size =>{
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        
    }
    else if(size.classList.contains('font-size-2')){
        fontSize = '12px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontSize = '15px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = '18px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSize = '20px';
        root.style.setProperty('----sticky-top-left', '-10rem');
        root.style.setProperty('----sticky-top-right', '-33rem');
    }
    // change fontsize of the root html element
document.querySelector('html').style.fontSize = fontSize;
})
})

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

// change primary colors
colorPalette.forEach(color => {

    color.addEventListener('click', () => {

        changeActiveColorClass();
        
if(color.classList.contains('color-1')){
    primaryHue = 252;
}
else if(color.classList.contains('color-2')){
    primaryHue = 52;
}
else if(color.classList.contains('color-3')){
    primaryHue = 352;
}
else if(color.classList.contains('color-4')){
    primaryHue = 152;
}
else if(color.classList.contains('color-5')){
    primaryHue = 202;
}
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue',primaryHue )
    })
})

//change background colors

//remove active background class
const removeBackgroundColor = () =>{
    backgroundColorChange.forEach(backgroundRemove => {
            backgroundRemove.classList.remove('active');
        })
}
backgroundColorChange.forEach( bgColor => {

    bgColor.addEventListener('click', () => {

        removeBackgroundColor();

        if(bgColor.classList.contains('bg-1')){
           lightness = '95%';
        }
        else if(bgColor.classList.contains('bg-2')){
            lightness = '85%';
         }
        else if(bgColor.classList.contains('bg-3')){
            lightness = '17%';
         }
         bgColor.classList.add('active')
        root.style.setProperty('--background-color-light', lightness)
    })
})

//FRIENDS REQUESTS
request.addEventListener('click', () => {
    requests.forEach(quest => {
        quest.style.boxShadow = '0 0 1rem var(--color-primary)';
    }
    );
    setTimeout(() => {
        requests.forEach(quest => {
            quest.style.boxShadow = 'none';
        }
        )
    },2000);
    document.querySelector('.Request-item .notification-count').style.display = 'none';
    requestsNumber.style.display= 'none'
});

    requestCategory.addEventListener('click', () => {
      requests.forEach(quest => {
        quest.style.boxShadow = '0 0 1rem var(--color-primary)';
    }
    );
    setTimeout(() => {
        requests.forEach(quest => {
            quest.style.boxShadow = 'none';
        }
        )
    },2000);
        requestsNumber.style.display= 'none';
        document.querySelector('.Request-item .notification-count').style.display = 'none';
    })

    request.addEventListener('click', () => {
        requestDisplay.classList.toggle('requested')
    })

request1.addEventListener('click', () => {
    document.querySelector('.one').style.display = 'none';
})
request2.addEventListener('click', () => {
    document.querySelector('.two').style.display = 'none';
})
request3.addEventListener('click', () => {
    document.querySelector('.three').style.display = 'none';
})
request4.addEventListener('click', () => {
    document.querySelector('.four').style.display = 'none';
})
request5.addEventListener('click', () => {
    document.querySelector('.five').style.display = 'none';
})
request6.addEventListener('click', () => {
    document.querySelector('.six').style.display = 'none';
})
requestReject1.addEventListener('click', () => {
    document.querySelector('.one').style.display = 'none';
})
requestReject2.addEventListener('click', () => {
    document.querySelector('.two').style.display = 'none';
})
requestReject3.addEventListener('click', () => {
    document.querySelector('.three').style.display = 'none';
})
requestReject4.addEventListener('click', () => {
    document.querySelector('.four').style.display = 'none';
})
requestReject5.addEventListener('click', () => {
    document.querySelector('.five').style.display = 'none';
})
requestReject6.addEventListener('click', () => {
    document.querySelector('.six').style.display = 'none';
})

//display of posts
function mySubmit(event){
    posted.style.display = 'grid';
    event.preventDefault();

    postInput.value = ''
    
}

//Display of sidebar
icon.addEventListener('click', () => {
    posted.style.display = 'none';
})

slide.addEventListener('click', () => {
  left.style.right = '0';
  slide.style.display = 'none';
  slide2.style.display = 'block';
})
slide2.addEventListener('click', () => {
  left.style.right = '-3.6rem';
  slide.style.display = 'block';
  slide2.style.display = 'none'
})

setTimeout( function(){
    document.getElementById("cancel").style.display= "block"
    document.getElementById("alert-background").style.opacity= "1"
    document.getElementById("alert").style.opacity= "1"
    }, 1000
    );

    function myAlert(){
        document.getElementById("cancel").style.display = "none";
        document.getElementById("alert").style.opacity= "0";
        document.getElementById("alert").style.display= "none";
        document.getElementById("alert-background").style.display= "none";
    }

    const user = localStorage.getItem('firstData');
    document.getElementById('user').innerText = user;


// Function to handle changes based on max width
function messagesResponsivity() {
  const maxWidth = "900"; 

  if (window.innerWidth <= maxWidth) {
   menuItems.forEach(item => {
   item.addEventListener('click', () => {
   if(item.id != 'messages-notification'){
   document.querySelector('.messages').style.display = 'none';
   }
   else{
   document.querySelector('.messages').style.display = 'block';
   document.querySelector('#messages-notification .notification-count').style.display = 'none';
   
   }
   })
   })
  }
}

window.addEventListener('resize', messagesResponsivity);

messagesResponsivity();

function requestResponsivity() {
  const maxWidth = 900; 
  if (window.innerWidth <= maxWidth) {
   menuItems.forEach(items => {
   items.addEventListener('click', () => {
   if(items.id != 'messages-request'){
   document.querySelector('.friend-requests').style.display = 'none';
   }
   else{
   document.querySelector('.friend-requests').style.display = 'block';
   document.querySelector('#messages-request .notification-count').style.display = 'none';
   
   }
   })
   })
  }
}


window.addEventListener('resize', requestResponsivity);

requestResponsivity();