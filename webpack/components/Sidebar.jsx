import { Sidebar, Menu, SubMenu, MenuItem, ProSidebarProvider, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function SidebarLayout() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
    </div>

    // 一個一個來，不要急著全家進去
  );
}

export default SidebarLayout;