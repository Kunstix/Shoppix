import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from './MenuItem';
import { selectSections } from '../../redux/selectors/sectionSelector';
import './menuGrid.scss';

const MenuGrid = ({ sections }) => {
  return (
    <div className='menu-grid'>
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(MenuGrid);
