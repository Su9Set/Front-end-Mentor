const button = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']

      function play(pressedKey) {
        document.querySelector('.last-used-key').innerText = pressedKey.toUpperCase();
        let formattedPressedKey = pressedKey.toLowerCase();

        var audios = document.querySelectorAll('audio[data-key]');
        audios.forEach(audio =>{
            if (pressedKey === audio.dataset.key) {
                audio.play();
            }
        });

      }
      window.document.onkeyup = function(event) {
        let pressedKey = event.key.toLowerCase();

        if (button.includes(pressedKey)){
            play(pressedKey);
        }
    }