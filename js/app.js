// 3D Scroll

let zSpacing = -2000,
		lastPos = zSpacing / 6,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = [-1540, -5540, -7040, -9540, -11040, -13540, -15040, -18000]
		darks = [500, -2500, -4000, -2500, -4000, -2500, -4000, -1300]

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals[i] += delta * -4
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < darks[i] ? 0 : zVals[i] < Math.abs(zSpacing)/3 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}



// Audio and preload



let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio'),
		body = document.querySelector('body'),
		header = document.querySelector('header'),
		load = document.querySelector('.load'),
		preloader = document.querySelector('.preloader'),
		preloadButton = document.querySelector('.btn')
		all_ready = document.querySelector('.ready')
		


audioControl = function() {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
}


preloadButton.addEventListener('click', e => {
	
	preloader.classList.add('is-none')
	header.classList.remove('is-none')
	
	setTimeout(function() {body.removeChild(preloader)}, 2000)
	
	setTimeout(function() {
		window.scrollTo(0, 1)
		for (let i = 0; i<8; i++){
			zVals[i] += 800
		}
	}, 50)
	
	setTimeout(audioControl, 300)
})


soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}




window.onload = function() {
	setTimeout(function() {
		load.classList.add('end')
		all_ready.classList.add('end')
	}, 2500)
	setTimeout(function() {
		preloadButton.classList.add('end')
	}, 3000)
	setTimeout(function() {
		preloadButton.classList.add('vibration')
	}, 4500)		
}

