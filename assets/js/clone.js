$(function(){
    var listPosition = $('.profile-bottom--container .col-lg-9 .row');
    var itemPosition = $('.profile-bottom--container .col-lg-9 .row .col-lg-4');
    for (i = 0; i < 5; i++) {
        itemPosition.clone().appendTo(listPosition);
    }
    var listMenuArticle = $('.menu-article .article-new');
    var itemMenuArticle = $('.menu-article .article-new .item');
    for (i = 0; i < 5; i++) {
        itemMenuArticle.clone().appendTo(listMenuArticle);
    }
    var listMenuArticle1 = $('.menu-article .article-top');
    var itemMenuArticle1 = $('.menu-article .article-top .item');
    for (i = 0; i < 5; i++) {
        itemMenuArticle1.clone().appendTo(listMenuArticle1);
    }
})