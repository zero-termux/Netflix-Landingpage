let accordian = document.getElementsByClassName("FAQ-title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


const selectElement = document.getElementById('languagesSelect');
        selectElement.addEventListener('change', function (event) {
            const selectedLanguage = event.target.value;
            if (selectedLanguage === 'english') {
                window.location.href = 'index-en.html';
            } else if (selectedLanguage === 'indonesia') {
                window.location.href = 'index-id.html';
            }
        });

const selectElement2 = document.getElementById('languagesSelect2');
        selectElement2.addEventListener('change', function (event) {
            const selectedLanguage = event.target.value;
            if (selectedLanguage === 'english') {
                window.location.href = 'index-en.html';
            } else if (selectedLanguage === 'indonesia') {
                window.location.href = 'index-id.html';
            }
        });