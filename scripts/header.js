var testeGeral = $('.item');

function abrir(event) {
    console.log(event.target);
    var item = $(event.target).closest('.card.medium');
    var imgItem = $(item).find('.card-image img').attr('src');
    var contentItem = $(item).find('.card-content');
    var name = $(contentItem).find('.name').text();
    var price = $(contentItem).find('.price').text();

    $('.cart-img').prop('src', imgItem);
    $('.cart-item-title').html(name);
    $('.cart-item-price').html(price);


    console.log(item);
    
    console.log(imgItem);
    console.log(name);
    console.log(price);
};