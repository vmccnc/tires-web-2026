import s from './Header.module.scss';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const match = matchPath('/products/title/:title', location.pathname);

  const search = match?.params.title
    ? decodeURIComponent(match.params.title)
    : '';

  const handleInputChange = (query: string) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      navigate('/products/title');
      return;
    }

    navigate(`/products/title/${encodeURIComponent(trimmedQuery)}`);
  };
  return (
    <header className={s.header}>
      <HeaderDesktop onSearchChange={handleInputChange} search={search} />
      <HeaderMobile onSearchChange={handleInputChange} search={search} />
    </header>
  );
};
