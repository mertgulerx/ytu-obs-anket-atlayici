# OBS Anket Atlayıcı

1.  OBS sisteminden **Ders Değerlendirme Anketi** ekranını açın.
2.  Klavyenizden **`F12`** tuşuna basın (Veya sayfaya **Sağ Tık** yapıp **İncele / Inspect** diyerek geliştirici araçlarını açın).
3.  Açılan panelden **`Console`** sekmesine tıklayın.
4.  Aşağıdaki kodu kopyalayın, konsola yapıştırın ve **`Enter`** tuşuna basın.

```javascript
var targetDoc = document.getElementById('IFRAME1') ? document.getElementById('IFRAME1').contentWindow.document : document;

var neutralOptions = targetDoc.querySelectorAll("input[type='radio'][value='3']");
neutralOptions.forEach(function(radio) {
    radio.checked = true;
    radio.click(); 
});

console.log(neutralOptions.length + " adet soru 'Ne Katılıyorum Ne Katılmıyorum' olarak işaretlendi.");

var allRadios = targetDoc.querySelectorAll("input[type='radio']");
var groups = {};

allRadios.forEach(function(r){ groups[r.name] = false; });

allRadios.forEach(function(r){ if(r.checked) groups[r.name] = true; });

for (var name in groups) {
    if (groups[name] === false) {
        var noCommentBtn = targetDoc.querySelector("input[name='" + name + "'][value='1']");
        if (noCommentBtn) {
            noCommentBtn.checked = true;
            noCommentBtn.click();
            console.log("Yorum sorusu 'İstemiyorum' olarak işaretlendi.");
        }
    }
}

var textInputs = targetDoc.querySelectorAll("input[type='text']");
textInputs.forEach(function(input) {
    input.value = ""; 
});

var saveButton = targetDoc.getElementById("btnKaydet");

if (saveButton) {
    saveButton.scrollIntoView();
    setTimeout(function() {
        if(saveButton.href && saveButton.href.indexOf('javascript') !== -1) {
             eval(saveButton.href); 
        } else {
             saveButton.click();
        }
        console.log("Kaydet butonuna basıldı.");
    }, 500);
} else {
    console.log("Kaydet butonu bulunamadı, lütfen manuel basınız.");
}
```

#

2709 sayılı Türkiye Cumhuriyeti Anayasası'nın Başlangıç hükümleri ve 2. ve 5. maddelerinde Türkiye Cumhuriyeti Devletinin Hukuk devleti olup kimsenin hukuk devleti dışına çıkamayacağı, devletin amaç ve görevlerinin kişilerin ve toplumun refahı, huzur ve mutluluğunu sağlamak ve insanın maddi ve manevi varlığının gelişmesi için gerekli şartları hazırlamaya çalışmak olduğu, Anayasa'nın 10. maddesinde herkes din, ırk, renk, siyasi düşünce, felsefi inanç, mezhep ve benzeri sebeplerle ayırım gözetilmeksizin kanun önünde eşit olduğunu, hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamayacağının, 11. maddeye göre Anayasa hükümlerinin yasama, yürütme ve yargı organları ile tüm idari makamları bağlayan tüm temel kuralların olduğu ve kanunun Anayasa'ya aykırı olamayacağının, 12. maddesinde herkesin kişiliğine bağlı dokunulmaz, devredilmez, vazgeçilmez, temel hak ve hürriyetlere sahip olduğunun, temel hak ve hürriyetlerinin kişinin topluma ailesine ve diğer kişilere karşı ödev ve sorumluluklarını ihtiva ettiğini, 13. maddesinin temel hak ve hürriyetlerinin özlerine dokunulmaksızın Anayasa'nın ilgili maddesinde belirtilen sebeplere bağlı olarak ve ancak kanunla sınırlanabileceği ve bu sınırlamanın Anayasa'nın sözüne, ruhuna, demokratik toplum düzenine ve laik Cumhuriyetin gereklerine ve ölçülülük ilkesine aykırı olamayacağının, 17. maddesinde herkesin yaşama, maddi ve manevi varlığını koruma ve geliştirme hakkına sahip olduğunu, 19. maddesinde ise kişi hürriyeti ve güvenliğini düzenlediği herkesin kişi hürriyeti ve güvenliğine sahip olduğunu, 20. maddesinin herkesin özel hayatına ve aile hayatına saygı göstermesinin isteme hakkına sahip olduğunun, ***25. maddesinde ise herkes düşünce ve kanaat hürriyetine sahip olduğunun, her ne sebep ve amaçla olursa olsun herkes düşünce ve kanaatlerini açıklamaya zorlanamayacağını emreden amir hükümlerdir***
