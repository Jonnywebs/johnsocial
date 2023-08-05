function saveData() {
                const inputValue1 = document.getElementById('firstname').value;
                localStorage.setItem('firstData', inputValue1);

                const inputValue2 = document.getElementById('lastname').value;
                localStorage.setItem('secondData', inputValue2);

                const inputValue3 = document.getElementById('phone').value;
                localStorage.setItem('thirdData', inputValue3);

                const inputValue4 = document.getElementById('gender').value;
                localStorage.setItem('fourthData', inputValue4);

                const inputValue5 = document.getElementById('email').value;
                localStorage.setItem('fifthData', inputValue5);

                const inputValue6 = document.getElementById('password').value;
                localStorage.setItem('sixthData', inputValue6);
                
                
                alert('Data Saved!');
              } 
              
              
              function myIcon() {
              document.querySelector(".password").type = "text"
              document.querySelector('.img').style.display = 'none';
              document.querySelector('.img1').style.display = 'inline-block'
              }
              function myIcons() {
              document.querySelector(".password").type = "password";
              document.querySelector('.img').style.display = 'inline-block';
              document.querySelector('.img1').style.display = 'none'
              }