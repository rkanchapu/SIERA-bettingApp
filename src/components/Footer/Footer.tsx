import React from 'react';
import { useHistory } from "react-router-dom";
import paths from '../../router/paths';

export interface Props {
  REACT_APP_NAME: String;
}

const Footer: React.FC<Props> = ({ REACT_APP_NAME }) => {
  const history = useHistory();
  /* navigate function */
  const navigate = (path: string) => {
    history.push(path);
  };

  return (
    <footer>
      <div className="link">
        <a
          onClick={() => navigate(paths.home)}
          rel="noopener noreferrer"
          title="Home page"
        >
          {REACT_APP_NAME}
        </a>
      </div>

      <h5>{'A sample betting application'}</h5>

      <div className="links">
        <a
          onClick={() => navigate(paths.home)}
          rel="noopener noreferrer"
          title="Football page"
        >
          Football
        </a>&nbsp;|&nbsp;

        <a
          onClick={() => navigate(paths.betslip)}
          rel="noopener noreferrer"
          title="Open betslip"
        >
          Betslip
        </a>

      </div>
    </footer>
  );
}

export default React.memo(Footer);
