import React from 'react';
import { Carousel, Image } from 'antd';
import style from './index.module.scss';

export default function Poster() {
  return (
    <div
      className={style.wrapper}
      style={{ boxShadow: ' 20px 20px 50px 15px grey', marginBottom: '64px' }}
    >
      <Carousel autoplay className={style.carousel}>
        <Image
          className={style.image}
          src={
            'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/ve-concert-the-virtual-trong-game-696x390.jpg?fit=700%2C20000&quality=95&ssl=1'
          }
          alt="ve pts"
          width={'100%'}
        />

        <Image
          className={style.image}
          src={
            'https://kenh14cdn.com/203336854389633024/2022/10/21/photo-5-16663516267631798534299.png'
          }
          alt="ve pts"
          width={'100%'}
        />

        <Image
          className={style.image}
          src={
            'https://cdnmedia.webthethao.vn/uploads/media/images/files/duylong/14411115771525395502.jpg'
          }
          alt="ve pts"
          width={'100%'}
        />

        <Image
          className={style.image}
          src={
            'https://www.cgv.vn/media/catalog/product/cache/1/small_image/600x314/a134659ca47b28f7b266e1777fbf870f/9/8/980x448__1_.jpg'
          }
          alt="ve pts"
          width={'100%'}
        />
      </Carousel>
    </div>
  );
}
