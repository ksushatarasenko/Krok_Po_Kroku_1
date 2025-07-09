
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

// 

        function playAudios(element) {
            const audioSrc = element.getAttribute("data-audio");
            const player = document.getElementById("audioPlayer");

            if (audioSrc) {
                player.src = audioSrc;
                player.play().catch(error => {
                    console.error("Ошибка воспроизведения аудио:", error);
                });
            }
        }

        // Прокрутка вверх — без изменений
        const scrollBtns = document.getElementById("scrollTopBtn");

        window.onscroll = function () {
            scrollBtns.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
        };

        scrollBtns.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
