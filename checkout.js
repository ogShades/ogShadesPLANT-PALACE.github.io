function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName("check")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

let paymentSelect = document.getElementById("pay-select");
let updateSelect = function(e) {
    document.querySelector(".is-visible").classList.remove('is-visible');
    let payment = e.target.value;
    document.querySelector(`#${payment}`).classList.add("is-visible");
}

paymentSelect.addEventListener("change", updateSelect);
