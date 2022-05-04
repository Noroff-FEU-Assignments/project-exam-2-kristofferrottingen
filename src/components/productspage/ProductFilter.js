import React from 'react';
import Category from '../Category';
import { InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';

function ProductFilter() {
  return (
    <>
        <div className='product-page-filter filter-web'>
            <h4>HANDLE ETTER</h4>
            <div className='line-filter'></div>
            <h4>KATEGORI</h4>
            <Category id='18' category='Sykkel' />
            <Category id='2' category='Hjelm' />
            <Category id='8' category='Sykkellås' />
            <Category id='10' category='Barnesykkel' />
            <div className='line-filter'></div>
            <h4>PRIS</h4>
            <Category id='18' category='kr 0,00 - kr 500,00' />
            <Category id='2' category='kr 500,00 - kr 1500,00' />
        </div>
        <div className='filter-mobile'>
            <InputGroup className="mb-3">
                <DropdownButton
                variant="outline-secondary"
                title="Handle etter"
                id="input-group-dropdown-1"
                >
                <h4>KATEGORI</h4>
                <Dropdown.Item><Category id='18' category='Sykkel' /></Dropdown.Item>
                <Dropdown.Item><Category id='2' category='Hjelm' /></Dropdown.Item>
                <Dropdown.Item><Category id='8' category='Sykkellås' /></Dropdown.Item>
                <Dropdown.Item><Category id='10' category='Barnesykkel' /></Dropdown.Item>
                <Dropdown.Divider />
                <h4>PRIS</h4>
                <Dropdown.Item><Category id='18' category='kr 0,00 - kr 500,00' /></Dropdown.Item>
                <Dropdown.Item><Category id='2' category='kr 500,00 - kr 1500,00' /></Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </div>
    </>
  )
}

export default ProductFilter