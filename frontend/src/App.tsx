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

      <main className="flex flex-col px-4 py-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Container>
            <h2 className="font-semibold text-lg">Add location</h2>
            <AddLocationForm />
          </Container>

          <Container>
            <h2 className="font-semibold text-lg">Saved locations</h2>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
