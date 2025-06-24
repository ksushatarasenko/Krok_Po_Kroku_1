
function playAudio(id) {
    const audio = document.getElementById(id);

    // Приостанавливаем другие аудио, если нужно
    const allAudio = document.querySelectorAll('audio');
    allAudio.forEach(a => {
      if (a !== audio) {
        a.pause();
        a.currentTime = 0;
      }
    });

    // Воспроизводим нужное
    audio.play();
  }

//   prokrutka

const scrollBtn = document.getElementById("scrollTopBtn");

        window.onscroll = function () {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        };

        scrollBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });