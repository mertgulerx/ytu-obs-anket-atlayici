setTimeout(function() {
    
    var saveButton = document.getElementById("btnKaydet") || document.getElementById("btnGonder");
    
    if (!saveButton) {
        return; 
    }

    console.log("Anket tespit edildi, otomatik dolduruluyor...");

    var neutralOptions = document.querySelectorAll("input[type='radio'][value='3']");
    neutralOptions.forEach(function(radio) {
        radio.checked = true;
        radio.click();
    });

    var allRadios = document.querySelectorAll("input[type='radio']");
    var groups = {};
    
    allRadios.forEach(function(r){ groups[r.name] = false; });
    allRadios.forEach(function(r){ if(r.checked) groups[r.name] = true; });

    for (var name in groups) {
        if (groups[name] === false) {
            var noCommentBtn = document.querySelector("input[name='" + name + "'][value='1']");
            if (noCommentBtn) {
                noCommentBtn.checked = true;
                noCommentBtn.click();
            }
        }
    }

    var textInputs = document.querySelectorAll("input[type='text'], textarea");
    textInputs.forEach(function(input) {
        input.value = "";
    });

    console.log("Kaydediliyor...");
    
    setTimeout(function() {
        if(saveButton.href && saveButton.href.indexOf('javascript') !== -1) {
             var script = document.createElement('script');
             script.textContent = saveButton.href;
             document.body.appendChild(script);
        } else {
             saveButton.click();
        }
    }, 500);

}, 1500);
