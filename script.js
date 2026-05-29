function orderWA(product){
  const number = '6289519622832';
  const text = `Halo Zhax Store, saya ingin memesan: ${product}`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  window.open(url,'_blank');
}
