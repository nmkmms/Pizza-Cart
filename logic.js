//Think how to fix bug (buttons on added divs are not working)
$(".button").click(function () {
    let item = $(".search").val();
    $(".search").val("");
    if (item.length > 0) {
        $(".bottom-segment").append(
            '<div class="line">\n' +
            '    <div class="text-block">\n' +
            '        <div class="just-text">' + item + '</div>\n' +
            '    </div>\n' +
            '    <div class="quantity-block">\n' +
            '        <button class="button-minus">–\n' +
            '            <span class="data-tooltip">Зменшити</span>\n' +
            '        </button>\n' +
            '        <span>&#160;1&#160;</span>\n' +
            '        <button class="button-plus">+\n' +
            '            <span class="data-tooltip">Збільшити</span>\n' +
            '        </button>\n' +
            '    </div>\n' +
            '    <div class="decide-bar">\n' +
            '        <button class="button-bought">Куплено\n' +
            '            <span class="data-tooltip">Додати до купленого</span>\n' +
            '        </button>\n' +
            '        <button class="button-delete">x\n' +
            '            <span class="data-tooltip">Видалити</span>\n' +
            '        </button>\n' +
            '    </div>\n' +
            '</div>'
        );
        $(".stats-bought").append(
            '<div class="good-to-buy">\n' +
            '    <span class="good-name">' + item + '</span>\n' +
            '    <span class="orange-circle">&#160;1</span>\n' +
            '</div>'
        )
    }
});

$(document).ready(function () {
    $(".button-delete").click(function () {
        $(this).parent().parent().remove();
    });
});

//Add to the next 2 functions ability to change numbers in the right panel
$(".button-plus").click(function () {
    let span = $(this).parent().find('.num');
    let data = parseInt(span.html());
    span.html(data + 1);

});

$(".button-minus").click(function () {
    let span = $(this).parent().find('.num');
    let data = parseInt(span.html());
    if (data != 1) {
        span.html(data - 1);
    }
});