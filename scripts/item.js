document.getElementById('kitchen-first-card').addEventListener('click', function () {
    let listElementValue = getItem('kitchen-first-card');
    let listElementPrice = getValue('kitchen-first-card');
    let previousTotal = itemAmount('total-price');

    makeList(listElementValue);

    previousTotal = (previousTotal + listElementPrice).toFixed(2);

    textSet(previousTotal);

    let discountAmount = (previousTotal * .2);
    let discountedAmount = discountAmount.toFixed(2);
    valueSet(discountedAmount);

    let totaledAmount = previousTotal - discountAmount;
    let totalAmount = totaledAmount.toFixed(2);
    totalSet(totalAmount);

    if (previousTotal > 0 && previousTotal < 200) {
        let purchaseButtonElement = document.getElementById('purchase-button');
        let purchaseButton = purchaseButtonElement.classList;
        purchaseButton.remove('cursor-not-allowed');
        purchaseButton.remove('opacity-70');
        purchaseButton.add('cursor-default');
        purchaseButtonElement.removeAttribute('disabled');  
    }

    else if (previousTotal > 0 && previousTotal > 200) {
        let couponButtonElement = document.getElementById('coupon-button');
        let couponButton = couponButtonElement.classList;
        couponButton.remove('cursor-not-allowed');
        couponButton.remove('opacity-70');
        couponButton.add('cursor-default');
        couponButtonElement.removeAttribute('disabled');

        let couponInputElement = document.getElementById('coupon-code');
        let couponInput = couponInputElement.classList;
        couponInput.remove('cursor-not-allowed');
        couponInput.add('cursor-default');
        couponInputElement.removeAttribute('disabled');
    }
})

document.getElementById('kitchen-second-card').addEventListener('click', function () {
    let listElementValue = getItem('kitchen-second-card');
    let listElementPrice = getValue('kitchen-second-card');
    let previousTotal = itemAmount('total-price');

    makeList(listElementValue);

    previousTotal = (previousTotal + listElementPrice).toFixed(2);

    textSet(previousTotal);

    let discountAmount = (previousTotal * .2);
    let discountedAmount = discountAmount.toFixed(2);
    valueSet(discountedAmount);

    let totaledAmount = previousTotal - discountAmount;
    let totalAmount = totaledAmount.toFixed(2);
    totalSet(totalAmount);

    if (previousTotal > 0 && previousTotal < 200) {
        let purchaseButtonElement = document.getElementById('purchase-button');
        let purchaseButton = purchaseButtonElement.classList;
        purchaseButton.remove('cursor-not-allowed');
        purchaseButton.remove('opacity-70');
        purchaseButton.add('cursor-default');
        purchaseButtonElement.removeAttribute('disabled');
    }

    else if (previousTotal > 0 && previousTotal > 200) {
        let couponButtonElement = document.getElementById('coupon-button');
        let couponButton = couponButtonElement.classList;
        couponButton.remove('cursor-not-allowed');
        couponButton.remove('opacity-70');
        couponButton.add('cursor-default');
        couponButtonElement.removeAttribute('disabled');

        let couponInputElement = document.getElementById('coupon-code');
        let couponInput = couponInputElement.classList;
        couponInput.remove('cursor-not-allowed');
        couponInput.add('cursor-default');
        couponInputElement.removeAttribute('disabled');
    }
})

document.getElementById('kitchen-third-card').addEventListener('click', function () {
    let listElementValue = getItem('kitchen-third-card');
    let listElementPrice = getValue('kitchen-third-card');
    let previousTotal = itemAmount('total-price');

    makeList(listElementValue);

    previousTotal = (previousTotal + listElementPrice).toFixed(2);

    textSet(previousTotal);

    let discountAmount = (previousTotal * .2);
    let discountedAmount = discountAmount.toFixed(2);
    valueSet(discountedAmount);

    let totaledAmount = previousTotal - discountAmount;
    let totalAmount = totaledAmount.toFixed(2);
    totalSet(totalAmount);

    if (previousTotal > 0 && previousTotal < 200) {
        let purchaseButtonElement = document.getElementById('purchase-button');
        let purchaseButton = purchaseButtonElement.classList;
        purchaseButton.remove('cursor-not-allowed');
        purchaseButton.remove('opacity-70');
        purchaseButton.add('cursor-default');
        purchaseButtonElement.removeAttribute('disabled');
    }

    else if (previousTotal > 0 && previousTotal > 200) {
        let couponButtonElement = document.getElementById('coupon-button');
        let couponButton = couponButtonElement.classList;
        couponButton.remove('cursor-not-allowed');
        couponButton.remove('opacity-70');
        couponButton.add('cursor-default');
        couponButtonElement.removeAttribute('disabled');

        let couponInputElement = document.getElementById('coupon-code');
        let couponInput = couponInputElement.classList;
        couponInput.remove('cursor-not-allowed');
        couponInput.add('cursor-default');
        couponInputElement.removeAttribute('disabled');
    }
})

document.getElementById('sports-one-card').addEventListener('click', function () {
    let listElementValue = getItem('sports-one-card');
    let listElementPrice = getValue('sports-one-card');
    let previousTotal = itemAmount('total-price');

    makeList(listElementValue);

    previousTotal = (previousTotal + listElementPrice).toFixed(2);

    textSet(previousTotal);

    let discountAmount = (previousTotal * .2);
    let discountedAmount = discountAmount.toFixed(2);
    valueSet(discountedAmount);

    let totaledAmount = previousTotal - discountAmount;
    let totalAmount = totaledAmount.toFixed(2);
    totalSet(totalAmount);

    if (previousTotal > 0 && previousTotal < 200) {
        let purchaseButtonElement = document.getElementById('purchase-button');
        let purchaseButton = purchaseButtonElement.classList;
        purchaseButton.remove('cursor-not-allowed');
        purchaseButton.remove('opacity-70');
        purchaseButton.add('cursor-default');
        purchaseButtonElement.removeAttribute('disabled');
    }

    else if (previousTotal > 0 && previousTotal > 200) {
        let couponButtonElement = document.getElementById('coupon-button');
        let couponButton = couponButtonElement.classList;
        couponButton.remove('cursor-not-allowed');
        couponButton.remove('opacity-70');
        couponButton.add('cursor-default');
        couponButtonElement.removeAttribute('disabled');

        let couponInputElement = document.getElementById('coupon-code');
        let couponInput = couponInputElement.classList;
        couponInput.remove('cursor-not-allowed');
        couponInput.add('cursor-default');
        couponInputElement.removeAttribute('disabled');
    }
})

document.getElementById('sports-two-card').addEventListener('click', function () {
    let listElementValue = getItem('sports-two-card');
    let listElementPrice = getValue('sports-two-card');
    let previousTotal = itemAmount('total-price');

    makeList(listElementValue);

    previousTotal = (previousTotal + listElementPrice).toFixed(2);

    textSet(previousTotal);

    let discountAmount = (previousTotal * .2);
    let discountedAmount = discountAmount.toFixed(2);
    valueSet(discountedAmount);

    let totaledAmount = previousTotal - discountAmount;
    let totalAmount = totaledAmount.toFixed(2);
    totalSet(totalAmount);

    if (previousTotal > 0 && previousTotal < 200) {
        let purchaseButtonElement = document.getElementById('purchase-button');
        let purchaseButton = purchaseButtonElement.classList;
        purchaseButton.remove('cursor-not-allowed');
        purchaseButton.remove('opacity-70');
        purchaseButton.add('cursor-default');
        purchaseButtonElement.removeAttribute('disabled');
    }

    else if (previousTotal > 0 && previousTotal > 200) {
        let couponButtonElement = document.getElementById('coupon-button');
        let couponButton = couponButtonElement.classList;
        couponButton.remove('cursor-not-allowed');
        couponButton.remove('opacity-70');
        couponButton.add('cursor-default');
        couponButtonElement.removeAttribute('disabled');

        let couponInputElement = document.getElementById('coupon-code');
        let couponInput = couponInputElement.classList;
        couponInput.remove('cursor-not-allowed');
        couponInput.add('cursor-default');
        couponInputElement.removeAttribute('disabled');
    }
})

document.getElementById('sports-three-card').addEventListener('click', function () {
    let listElementValue = getItem('sports-three-card');
    let listElementPrice = getValue('sports-three-card');
    let previousTotal = itemAmount('total-price');

    makeList(listElementValue);

    previousTotal = (previousTotal + listElementPrice).toFixed(2);

    textSet(previousTotal);

    let discountAmount = (previousTotal * .2);
    let discountedAmount = discountAmount.toFixed(2);
    valueSet(discountedAmount);

    let totaledAmount = previousTotal - discountAmount;
    let totalAmount = totaledAmount.toFixed(2);
    totalSet(totalAmount);

    if (previousTotal > 0 && previousTotal < 200) {
        let purchaseButtonElement = document.getElementById('purchase-button');
        let purchaseButton = purchaseButtonElement.classList;
        purchaseButton.remove('cursor-not-allowed');
        purchaseButton.remove('opacity-70');
        purchaseButton.add('cursor-default');
        purchaseButtonElement.removeAttribute('disabled');
    }

    else if (previousTotal > 0 && previousTotal > 200) {
        let couponButtonElement = document.getElementById('coupon-button');
        let couponButton = couponButtonElement.classList;
        couponButton.remove('cursor-not-allowed');
        couponButton.remove('opacity-70');
        couponButton.add('cursor-default');
        couponButtonElement.removeAttribute('disabled');

        let couponInputElement = document.getElementById('coupon-code');
        let couponInput = couponInputElement.classList;
        couponInput.remove('cursor-not-allowed');
        couponInput.add('cursor-default');
        couponInputElement.removeAttribute('disabled');
    }
})