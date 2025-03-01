document.addEventListener('click', function(event) {
  const target = event.target.closest('a'); // Tıklanan elemanın bir link olup olmadığını kontrol et
  if (target && target.href && target.href.includes('_thumbnail')) {
    event.preventDefault(); // Varsayılan link açılmasını engelle
    const fullSizeUrl = target.href.replace('_thumbnail', ''); // '_thumbnail' kısmını kaldır
    chrome.runtime.sendMessage({ action: "openTab", url: fullSizeUrl }); // Yeni sekme açmak için mesaj gönder
  }
});