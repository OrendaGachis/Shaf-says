$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse =$('.toggle-Collapse');

    /**click event on toggle menus */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });


});