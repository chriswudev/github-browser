import languageColors from '../../utils/languageColors';
import './languageItem.css';

const LanguageItem = ({ language }) => {
  return (
    <span
      className="language-item"
      style={{ background: languageColors[language] || 'gray' }}
    >
      {language ? language : 'No Languages Detected'}
    </span>
  );
};

export default LanguageItem;
