input=document.querySelector("input");
         btn =document.querySelector(".addTask > button");

         btn.addEventListener('click',addList);
         input.addEventListener('keyup',(e)=>{
         (e.keyCode===13 ? addList(e) : null);
         });


        //function for add a task in a list
        function addList(e){
           notCompleted=document.querySelector(".notCompleted");
           Completed=document.querySelector(".Completed");

           newLi =document.createElement("li");
           checkBtn =document.createElement("button");
           delBtn =document.createElement("button");

        //used icons of check bitton and del button
         checkBtn.innerHTML='<i class = "fa fa-check" ></i>';
         delBtn.innerHTML ='<i class = "fa fa-trash" ></i>';


       // function for input section
        if (input.value !==''){
          newLi.textContent=input.value;
          input.value='';
          notCompleted.appendChild(newLi);
          newLi.appendChild(checkBtn);
          newLi.appendChild(delBtn);
        }

       // click function for check button
        checkBtn.addEventListener('click',function(){
            parent=this.parentNode;
            parent.remove();
            Completed.appendChild(parent);
            checkBtn.style.display='none';
        });

       // click function for delete button
       delBtn.addEventListener('click',function(){
          parent=this.parentNode;
          parent.remove();
       });
   } 