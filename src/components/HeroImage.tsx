import heroImg from '../../public/static/img/hero-img.webp';
import Image from 'next/image';

const HeroImage = ()  => {
    return(
      <Image src={heroImg} alt="logo" height={500} width={500} />
    )
}
export default HeroImage