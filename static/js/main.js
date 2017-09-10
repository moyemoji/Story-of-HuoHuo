window.onload = function () {
    var page = 0;
    var obj = JSON.stringify(myJson)
    var my_title = document.getElementById("my-title");
    var my_date = document.getElementById("my-date");
    var my_article = document.getElementById("my-article");
    var pre_btn = document.getElementById("pre-page");
    var next_btn = document.getElementById("next-page");
    var jump_btn = document.getElementById("jump-page");
    var select_page = document.getElementById("select-page");

    function changePage(page) {
        my_title.innerHTML = myJson.article[page].title;
        my_date.innerHTML = myJson.article[page].date;
        my_article.innerHTML = myJson.article[page].content;
    }

    changePage(page);

    next_btn.onclick = function () {
        page++;
        if (myJson.article[page]) {
            changePage(page);
        } else {
            page--;
        }
    }

    pre_btn.onclick = function () {
        page--;
        if (myJson.article[page]) {
            changePage(page);
        } else {
            page++;
        }
    }

    jump_btn.onclick = function () {
        var reg = "^[0-9]*$";
        var page_value = select_page.value;
        if (page_value.match(reg) && page_value > 0 && page_value <= myJson.article.length) {
            page = page_value - 1;
            changePage(page);
        } else {
            alert('请输入正确页码，最大页数为' + myJson.article.length);
        }
    }
}
