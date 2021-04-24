// referenced this code: https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react
// added PropTypes & added {children} for my usage
import { useState, useEffect } from "react";
// add type checking for arguments
import PropTypes from 'prop-types';


const LazyImage = ({ src, children, placeholder }) => {
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => setSourceLoaded(src)
  }, [sourceLoaded])

  return (
    <div style={{
      backgroundImage: `url(${src || placeholder})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -50
    }}>
      {children}
    </div>
  )
}

LazyImage.propTypes = {
  src: PropTypes.string,
  placeholder: PropTypes.string
};

export default LazyImage;