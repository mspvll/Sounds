let audio = ['bomb', 'click', 'fire', 'scotch', 'tiger']
let class_a = document.querySelector('.a')


audio.forEach((a)=>{
    let teg = document.createElement('div')
    teg.classList.add('btn')
    teg.innerText = a
    teg.addEventListener('click', ()=>{
        stop()
        document.getElementById(a).play()
    })
    class_a.appendChild(teg)
})

function stop(){
    audio.forEach((a)=>{
        let stop_it = document.getElementById(a)
        stop_it.pause()
        stop_it.currentTime = 0
    })
}

// function play_music_bomb(){
//     let bomb = new Audio('sounds/bomb.mp3')
//     bomb.play()
// }

