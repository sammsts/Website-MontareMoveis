import '../../../ui/styles/globals.css'
import { useLocation } from 'react-router-dom';
import InstaFeed from '../../../ui/components/instafeed/InstaFeed';
import Banners from '../../../ui/components/banners/Banners';

const FabricacoesMidia = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const justImages = queryParams.get('justImages');

    return (
      <div>
        <Banners />
        <InstaFeed justImages={justImages}/>
      </div>
    );
  };
export default FabricacoesMidia;