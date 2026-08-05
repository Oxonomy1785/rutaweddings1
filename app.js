const maxImg = document.querySelector(".right-panel img");
const select = document.querySelector("select");
const alllang = [ua, it];

select.addEventListener('change', changeURLLanguage);
// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}


function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (lallLang.includes (hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
    }
    select.value = hash;
}

changeLanguage();