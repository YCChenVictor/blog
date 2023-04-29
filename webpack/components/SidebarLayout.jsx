import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, ProSidebarProvider, SubMenu } from 'react-pro-sidebar';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function SidebarLayout() {
  const [menuItems, setMenuItems] = useState('testing')
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const queriedTitles = [...document.querySelectorAll('h2, h3, h4, h5, h6')];
    const titles = queriedTitles.map(
      item => ({id: item.id, tag: item.tagName.match(/\d+/)[0], position: queriedTitles.indexOf(item)})
    )
    const menuItemsDesired = titles.map((title) => (<MenuItem
      rootStyles={{
        'font-size': 48 / title.tag + 'px',
      }}
      routerLink={
        <HashLink to={`#${title.id}`} />
      }
    >{title.id}
    </MenuItem>))
    setMenuItems(menuItemsDesired)
    setWindowWidth(windowWidth)
  }, [])
  return (
    <div style={{ display: 'flex', height: '70vh' }} >
      <ProSidebarProvider
      >
        <BrowserRouter
        >
          <Sidebar
            backgroundColor="rgb(156 163 175)"
          >
            <Menu
            >
              {menuItems}
            </Menu>
          </Sidebar>
          <Routes>
            <Route path="#why"/>
          </Routes>
        </BrowserRouter>
      </ProSidebarProvider>
    </div>
  );
}

export default SidebarLayout;
