let inputNote = document.querySelector('input');
inputNote.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		let newNote = document.createElement("div");
		newNote.innerHTML = '<div class="note"><span class="text">'+inputNote.value+'</span><span class="trash"><i class="fas fa-times" aria-hidden="true"></i></span><span class="colors"><i class="fas fa-circle color0" aria-hidden="true"></i><i class="fas fa-circle color1" aria-hidden="true"></i><i class="fas fa-circle color2" aria-hidden="true"></i><i class="fas fa-circle color3" aria-hidden="true"></i><i class="fas fa-circle color4" aria-hidden="true"></i></span></div>'; 
		document.querySelector("#container").appendChild(newNote);
		lastNote = newNote.getElementsByClassName('trash')[0];
		lastNote.addEventListener('click', function (e) { this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
		}, false);
		inputNote.value = '';
	};
});

let removeNote = document.getElementsByClassName('trash');
for (let i = 0; i < removeNote.length; i++) { 
	removeNote[i].addEventListener('click', function (e) { this.parentNode.parentNode.removeChild(this.parentNode);
	}, false);
};

// document.querySelectorAll('.fa-circle').forEach(noteColor => { noteColor.addEventListener('click', function (e) {
//  		this.parentNode.parentNode.classList.toggle('note-color');
//  	});
// });

// for (let i = 0; i < 4; i++) {
// 	document.querySelectorAll('.color'+i).forEach(noteColor => { noteColor.addEventListener('click', function (e) {
// 			console.log(i)
// 	 		this.parentNode.parentNode.classList.toggle('note-color-'+i);
// 	 	});
// 	});
// };

// let noteColor = document.getElementsByClassName('fa-circle');
// noteColor.addEventListener('click', function (e) { this.parentNode.parentNode.parentNode.classList.toggle('note-color-'+i);
// });


	// for (let i = 0; i < noteColor.length; i++) { 
	// 	console.log(noteColor[i].parentNode.parentNode.parentNode);
	// 	noteColor[i].addEventListener('click', function (e) { 
	// 		this.parentNode.parentNode.parentNode.classList.toggle('note-color-'+i);
		// }, false);

// document.querySelectorAll(".box").forEach(box => { box.style.display = "none" }


// document.getElementsByClassName('color'+1).classList.add('note-color-'+1);

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') )

// document.getElementById("MyElement").classList.toggle('MyClass');

// let noteColor = document.getElementsByClassName('colors');

// let noteColor = document.getElementsByClassName('color'+i);
	// console.log(noteColor);