import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@context/ThemeContext';
import AppRouter from './router/AppRouter';
import { MouseProvider } from '@components/common/MouseTracker';
import SmoothScroll from '@components/common/SmoothScroll';
import InitialLoader from '@components/common/InitialLoader';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <InitialLoader />
      <MouseProvider>
        <SmoothScroll>
          <AppRouter />
          <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(17,24,39,0.95)',
            color: '#f1f5f9',
            border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: '12px',
            backdropFilter: 'blur(12px)',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#10b981', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#2563eb', secondary: '#fff' },
          },
        }}
      />
        </SmoothScroll>
      </MouseProvider>
    </ThemeProvider>
  );
}
