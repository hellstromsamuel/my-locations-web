import Header from "./components/layout/Header";
import { Container } from "./components/ui/container";
import AddLocationForm from "./features/locations/components/AddLocationForm";
import useTheme from "./hooks/theme/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div
      data-theme={theme}
      className="bg-gray-100 dark:bg-gray-800 min-h-screen min-w-screen"
    >
      <Header />

      <main className="flex flex-col px-4 py-8 ">
        <Container className="w-full max-w-96">
          <AddLocationForm />
        </Container>
      </main>
    </div>
  );
}

export default App;
