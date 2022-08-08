import { EyeOpenIcon, KeyboardIcon, BackpackIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useConnectionsProvider } from '../../contexts/ConnectionsProvider';
import { Box } from '../base';
import { SidebarGroup, SidebarItem } from './styles';

export function ConnectionSidebar() {
  const { selectedConnection } = useConnectionsProvider();

  if (!selectedConnection) {
    return null;
  }

  return (
    <Box
      css={{
        background: '$bg50',
        width: '320px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px 20px'
      }}
    >
      <SidebarGroup>
        <SidebarItem to="">
          <KeyboardIcon />
        </SidebarItem>

        <SidebarItem to="/pub-sub">
          <EyeOpenIcon />
        </SidebarItem>

        <SidebarItem to="..">
          <BackpackIcon />
        </SidebarItem>
      </SidebarGroup>
    </Box>
  );
}
