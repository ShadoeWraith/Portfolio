import { useState } from 'react';

export default function DotNav(props) {
  const { categories = [], currentCategory, setCurrentCategory } = props;

  const [visible, setVisible] = useState(false);

  const isSelected = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 625) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', isSelected);

  return (
    <nav className="dot-nav">
      {visible && (
        <ul>
          {categories.map((category) => (
            <li
              className={`dot-container ${
                currentCategory.name === category.name
                  ? 'is-active'
                  : 'not-active'
              }`}
              key={category.name}
            >
              <a
                href={`#${category.name}`}
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                <span className="dot"></span>
                <span className="dot-label">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}{' '}
    </nav>
  );
}
