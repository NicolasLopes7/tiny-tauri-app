import { RootProvider as RootUIProvider } from '@redis-ui/ui/contexts';
import { RootProvider as RootConnectionsProvider } from '@redis-ui/connections';
import React from 'react';
import { ConnectionsProvider } from './contexts/ConnectionsProvider';
import './globals.css';
import { Router } from './router';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RootUIProvider>
      <RootConnectionsProvider>
        <ConnectionsProvider>
          <Router />
        </ConnectionsProvider>
      </RootConnectionsProvider>
    </RootUIProvider>
  </React.StrictMode>
);
