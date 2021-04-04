
/* by Ibrahim jomaa

github: @divluffy
Facebook: @divluffy
twitter: @divluffy
linkedin: @divluffy
instagram: @divluffy

*/

let myVideo =document.querySelector('.video')
let playORpause =document.querySelector('.play-pause')
let audioStute =document.querySelector('.audio-stute')
let audioRatioDiv =document.querySelector('.audio-ratio')
let audioRatio =document.querySelector('.audio-ratio input')
let forHalfSvg =document.querySelector('.full-audio')
let vZoom =document.querySelector('.v-zoom')
let vProg =document.querySelector('.v-progress')
let prog =document.querySelector('.progress')
let times_video =document.querySelector('.times-video')
let overlay =document.querySelector('.overlay')
let file =document.querySelector('#choose-file')

//for chooce video from user
file.addEventListener('change', event=>{
    if(event.target.files.length > 0){
    var newsrc = URL.createObjectURL(event.target.files[0])
    myVideo.src = newsrc
}
})


//video go progress onclick user
vProg.addEventListener('click', e=>{

     const userClick = (e.offsetX /vProg.offsetWidth) * myVideo.duration 
     myVideo.currentTime = userClick

})


// video progress auto
myVideo.addEventListener('timeupdate', function(){
    const VP = (myVideo.currentTime / myVideo.duration) *100 // get maths arrived video
    prog.style.width = `${VP}%`

    if(myVideo.ended){
        playORpause.classList.toggle("active")
    }

    convertTime(Math.round(myVideo.currentTime));//call function down

    function convertTime(seconds){
        var min = Math.floor(seconds / 60);
        var sec = seconds % 60;
        
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        times_video.textContent = min + ":" + sec;
        
        totalTime(Math.round(myVideo.duration));
    }
    
    function totalTime(seconds){//call function down agin for count
        var min = Math.floor(seconds / 60);
        var sec = seconds % 60;
        
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        times_video.textContent += " / " + min + ":" + sec;
    }
})

//paly or pause video
playORpause.addEventListener('click', ()=>{
    funPlayPause()
})

overlay.addEventListener('click',()=>{
    funPlayPause()
})

function funPlayPause(){
    playORpause.classList.toggle("active")
    if(playORpause.classList.contains('active')){
        myVideo.pause()
    }
    if(!playORpause.classList.contains('active')){
        myVideo.play()
    }
}

//audio svg on or off
audioStute.addEventListener('click', ()=>{
    audioStute.classList.toggle("active")
    if(!audioStute.classList.contains('active')){
        myVideo.volume =100/100
        audioRatioDiv.classList.remove("active")
    }
    if(audioStute.classList.contains('active')){
        audioRatioDiv.classList.add("active")
        myVideo.volume =0/100

    }
})


//audio ratio - rnage
audioRatio.addEventListener('input', ()=>{
  
   let ratio = audioRatio.value
    if(ratio ==0){
      audioStute.classList.add("active")
    }
     if(ratio >1 && ratio<30 ){
        forHalfSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#fff" d="M19.1,9.4c-0.1-0.1-0.2-0.2-0.2-0.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4C17.8,11,18,11.5,18,12c0,0.6-0.3,1.2-0.7,1.5c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1C20.3,13.6,20.5,11.1,19.1,9.4z M14.4,4.1c-0.3-0.2-0.8-0.1-1.1,0.1L8.6,8H5C4.4,8,4,8.4,4,9v6c0,0.6,0.4,1,1,1h3.7l4.7,3.8c0.4,0.3,1.1,0.3,1.4-0.2c0.1-0.2,0.2-0.4,0.2-0.6V5C15,4.6,14.8,4.3,14.4,4.1z"/></svg>`
        audioStute.classList.remove("active")

    }
    if(ratio > 30 && ratio<70 ){
        forHalfSvg.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#fff" d="M12.4,4.1c-0.3-0.2-0.8-0.1-1.1,0.1L6.6,8H3C2.4,8,2,8.4,2,9v6c0,0.6,0.4,1,1,1h3.7l4.7,3.8c0.4,0.3,1.1,0.3,1.4-0.2c0.1-0.2,0.2-0.4,0.2-0.6V5C13,4.6,12.8,4.3,12.4,4.1z M17.1,9.4c-0.1-0.1-0.2-0.2-0.2-0.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4C15.8,11,16,11.5,16,12c0,0.6-0.3,1.2-0.7,1.5c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1C18.3,13.6,18.5,11.1,17.1,9.4z M20.1,6.9c-0.1-0.2-0.3-0.3-0.5-0.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c2.3,2.3,2.3,6.1,0,8.5c-0.1,0.1-0.3,0.2-0.4,0.4c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1c0,0,0,0,0,0C22.5,15.3,23,10.2,20.1,6.9z"/></svg>`
        audioStute.classList.remove("active")
    }
    if(ratio > 70 ){
        forHalfSvg.innerHTML =` <svg class="full-audio" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#fff" d="M12.4,4.1c-0.3-0.2-0.8-0.1-1.1,0.1L6.6,8H3C2.4,8,2,8.4,2,9v6c0,0.6,0.4,1,1,1h3.7l4.7,3.8c0.4,0.3,1.1,0.3,1.4-0.2c0.1-0.2,0.2-0.4,0.2-0.6V5C13,4.6,12.8,4.3,12.4,4.1z M14.7,13.9L14.7,13.9c-0.5,0.2-0.8,0.7-0.6,1.3c0.1,0.4,0.5,0.7,0.9,0.7c0.1,0,0.2,0,0.3-0.1c2.1-0.7,3.2-3,2.5-5.1c-0.4-1.1-1.3-2.1-2.5-2.5c-0.5-0.2-1.1,0.1-1.3,0.6s0.1,1.1,0.6,1.3c1,0.4,1.6,1.5,1.2,2.5C15.7,13.2,15.2,13.7,14.7,13.9z M21.9,10.9c-0.5-3.5-3.3-6.3-6.8-6.8C14.6,4,14.1,4.4,14,4.9s0.3,1.1,0.9,1.1c3.3,0.5,5.5,3.5,5.1,6.8c-0.4,2.6-2.4,4.7-5.1,5.1c-0.5,0.1-0.9,0.6-0.9,1.1c0.1,0.5,0.5,0.9,1,0.9c0,0,0.1,0,0.1,0C19.5,19.3,22.5,15.2,21.9,10.9z"/></svg>`
        audioStute.classList.remove("active")
    }
    myVideo.volume =ratio/100

})


//zoom on or off
vZoom.addEventListener('click', ()=>{
    vZoom.classList.toggle("active")
})