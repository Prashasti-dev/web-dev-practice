let btn=document.querySelector('button')
let h2=document.querySelector('h2')
let inner=document.querySelector('.inner')
let bottom=document.querySelector('.bottom')
let grow=0;


btn.addEventListener('click',function(){
     btn.style.pointerEvents= 'none'//button click krte hi pointer events disable ho jayega

    let num=50+Math.floor(Math.random()*50);//random time generate hoga
    // console.log(num);


        var int =setInterval(()=>{
             grow++;
             h2.innerHTML=grow+'%';
             inner.style.width=grow+'%';
           },num); //Random millisec time ke speed se grow


            setTimeout(() => {
                clearInterval(int)
                //disable download button
                btn.innerHTML='Downloaded';
                btn.style.opacity=0.5
               console.log('downloaded in ',num/10,'sec');
                
            },num*100);
//itne time baad rukjaayega


})