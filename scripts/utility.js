function getItem(elementId) {
    let items = document.getElementById(elementId).childNodes[3];
    let item = items.childNodes[3].innerText;
    return item;
}

function getValue(elementId) {
    let items = document.getElementById(elementId).childNodes[3];
    let item = items.childNodes[5].innerText;
    let itemPrice = parseFloat(item);
    return itemPrice;
}

function itemAmount(elementId) {
    let element = document.getElementById(elementId).innerText;
    let elementAmount = parseFloat(element);
    return elementAmount;
}

function makeList(elementId) {
    let listElement = document.getElementById('item-list');
    let listItem = document.createElement('li');
    listItem.innerText = elementId;
    listItem.classList.add('text-black', 'font-medium', 'text-2xl');
    listElement.appendChild(listItem);
    return listElement;
}

function textSet(value) {
    document.getElementById('total-price').innerText = value;
    return value;
}

function valueSet(value) {
    document.getElementById('discount-price').innerText = value;
    return value;
}

function totalSet(value) {
    document.getElementById('total-discounted-price').innerText = value;
    return value;
}