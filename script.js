document.addEventListener('DOMContentLoaded', () => {
  const images = [
      {src: 'images/1.jpeg', hdSrc: 'images/hd/1.jpeg', caption: 'First Image'},
      {src: 'images/2.jpeg', hdSrc: 'images/hd/2.jpeg', caption: 'Second Image'},
      {src: 'images/3.jpeg', hdSrc: 'images/hd/3.jpeg', caption: 'Third Image'},
      {src: 'images/4.jpeg', hdSrc: 'images/hd/4.jpeg', caption: 'Fourth Image'},
      {src: 'images/5.jpeg', hdSrc: 'images/hd/5.jpeg', caption: 'Fifth Image'},
      {src: 'images/6.jpeg', hdSrc: 'images/hd/6.jpeg', caption: 'Sixth Image'},
      {src: 'images/7.jpeg', hdSrc: 'images/hd/7.jpeg', caption: 'Seventh Image'},
      {src: 'images/8.jpeg', hdSrc: 'images/hd/8.jpeg', caption: 'Eighth Image'},
      {src: 'images/9.jpeg', hdSrc: 'images/hd/9.jpeg', caption: 'Ninth Image'},
      {src: 'images/10.jpeg', hdSrc: 'images/hd/10.jpeg', caption: 'Tenth Image'},
      {src: 'images/11.jpeg', hdSrc: 'images/hd/11.jpeg', caption: 'Eleventh Image'},
      {src: 'images/12.jpeg', hdSrc: 'images/hd/12.jpeg', caption: 'Twelfth Image'},
      {src: 'images/13.jpeg', hdSrc: 'images/hd/13.jpeg', caption: 'Thirteenth Image'},
      {src: 'images/14.jpeg', hdSrc: 'images/hd/14.jpeg', caption: 'Fourteenth Image'},
      {src: 'images/15.jpeg', hdSrc: 'images/hd/15.jpeg', caption: 'Fifteenth Image'},
      {src: 'images/16.jpeg', hdSrc: 'images/hd/16.jpeg', caption: 'Sixteenth Image'},
      {src: 'images/17.jpeg', hdSrc: 'images/hd/17.jpeg', caption: 'Seventeenth Image'},
      {src: 'images/18.jpeg', hdSrc: 'images/hd/18.jpeg', caption: 'Eighteenth Image'},
      {src: 'images/19.jpeg', hdSrc: 'images/hd/19.jpeg', caption: 'Nineteenth Image'},
      {src: 'images/20.jpeg', hdSrc: 'images/hd/20.jpeg', caption: 'Twentieth Image'}
  ];

  const gallery = document.getElementById('gallery');

  images.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.dataset.hdSrc = image.hdSrc;
      imgElement.dataset.caption = image.caption;
      imgElement.dataset.index = index;
      gallery.appendChild(imgElement);
  });

  gallery.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
          const hdSrc = e.target.dataset.hdSrc;
          const caption = e.target.dataset.caption;
          const hdImageContainer = document.createElement('div');
          hdImageContainer.id = 'hd-image-container';
          hdImageContainer.style.display = 'flex';

          const hdImage = document.createElement('img');
          hdImage.src = hdSrc;
          hdImageContainer.appendChild(hdImage);

          const captionElement = document.createElement('div');
          captionElement.id = 'caption';
          captionElement.textContent = caption;
          hdImageContainer.appendChild(captionElement);

          document.body.appendChild(hdImageContainer);

          hdImageContainer.addEventListener('click', () => {
              hdImageContainer.style.display = 'none';
              document.body.removeChild(hdImageContainer);
          });
      }
  });
}); 