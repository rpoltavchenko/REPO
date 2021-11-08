$('h3+div').each(function () {
    const $el = $(this);
    alert(this);
    $el.prev().before($el);    
});