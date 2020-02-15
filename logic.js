let item_id = 0;
$(".button").click(function () {
    let item = $(".search").val();
    $(".search").val("");
    if (item.length > 0) {
        $(".bottom-segment").append(
            '<div class="line" id="' + item_id + '">\n' +
            '    <div class="text-block">\n' +
            '        <div class="just-text">' + item + '</div>\n' +
            '    </div>\n' +
            '    <div class="quantity-block">\n' +
            '        <button onclick="minus(' + item_id + ')" class="button-minus">–\n' +
            '            <span class="data-tooltip">Зменшити</span>\n' +
            '        </button>\n' +
            '        <span class="num">1</span>\n' +
            '        <button onclick="plus(' + item_id + ')" class="button-plus">+\n' +
            '            <span class="data-tooltip">Збільшити</span>\n' +
            '        </button>\n' +
            '    </div>\n' +
            '    <div class="decide-bar">\n' +
            '        <button onclick="bought(' + item_id + ')" class="button-bought">Куплено\n' +
            '            <span class="data-tooltip">Додати до купленого</span>\n' +
            '        </button>\n' +
            '        <button onclick="deleteItem(' + item_id +')" class="button-delete">x\n' +
            '            <span class="data-tooltip">Видалити</span>\n' +
            '        </button>\n' +
            '    </div>\n' +
            '</div>'
        );
        $(".stats-bought").append(
            '<div class="good-to-buy" id="r' + item_id +'">\n' +
            '    <span class="good-name">' + item + '</span>\n' +
            '    <span class="orange-circle">&#160;1</span>\n' +
            '</div>'
        );
        item_id++;
    }
});


function deleteItem(id) {
    let rid = 'r' + id;
    document.getElementById(id).style.display = 'none';
    document.getElementById(rid).style.display = 'none';
}

function plus(id) {
    let rid = 'r' + id;
    let span = $("#" + id).find('.num');
    let data = parseInt(span.html());

    span.html(data + 1);
    $('#' + rid).find(".orange-circle").html('&#160;' + (data + 1));
}

function minus(id) {
    let rid = 'r' + id;
    let span = $("#" + id).find('.num');
    let data = parseInt(span.html());

    if (data != 1) {
        span.html(data - 1);
        $('#' + rid).find(".orange-circle").html('&#160;' + (data - 1));
    }
}

function bought(id) {
    let span = $("#" + id).find('.num');
    let quantity = parseInt(span.html());
    let text = $("#" + id).find(".just-text");
    let item = text.html();

    deleteItem(id);

    $(".already-bought").append(
        '<div class="good-to-buy">\n' +
        '    <span class="good-name">' + item + '</span>\n' +
        '    <span class="orange-circle">&#160;' + quantity + '</span>\n' +
        '</div>'
    );
}