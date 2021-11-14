const $checkboxes = $(':checkbox');
$checkboxes.on('click', function () {
    if ($(":checkbox: checked").lenght == 3) {
        $checkboxes.attr('disabled', true);
    }
})