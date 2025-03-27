import React from 'react';
import classes from './MenuItem.module.css';

function MenuItem({ title, isOpen, children, onClick, onSubItemClick }) {
  return (
    <div className={classes.menuItem}>
      <div className={classes.menuTitle} onClick={onClick}>
        {title}
      </div>
      {isOpen && (
        <div className={classes.menuContent}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => onSubItemClick(child.props.children)
            })
          )}
        </div>
      )}
    </div>
  );
}

export default MenuItem;
