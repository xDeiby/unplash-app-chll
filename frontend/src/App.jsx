import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";

import RoutesLayout from "./routes/Routes";
import Menu from "./components/shared/menu/Menu";
import GlobalStyle from "./styles/global.style";
import themeStyle from "./styles/theme.style";
import { AppLayout } from "./layouts";
import GalleryContextProvider from "./contexts/GalleryContext";

const queryClient = new QueryClient({});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />

        <QueryClientProvider client={queryClient}>
          {/* ---- Components ---- */}
          <GalleryContextProvider>
            <AppLayout>
              <Menu />
              <RoutesLayout />
            </AppLayout>
          </GalleryContextProvider>
          {/* ---- */}

          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
