function load() {
    for (var i = 0; i < 5; i++) {
        clone();
    }

}

function clone() {
    var cardTemplate = document.getElementById('card-template');

    var clone = cardTemplate.cloneNode(true);
    clone.style.display = 'block';
    cardTemplate.parentElement.prepend(clone);

}


load();