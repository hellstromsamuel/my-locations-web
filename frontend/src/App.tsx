import Header from "./components/layout/header";
import { Container } from "./components/ui/container";
import AddLocationForm from "./features/locations/components/AddLocationForm";
import SavedLocations from "./features/locations/components/SavedLocations";
import useLocations from "./features/locations/hooks/useLocations";
import useTheme from "./hooks/theme/useTheme";

function App() {
  const { theme } = useTheme();
  const { data: locations, isLoading } = useLocations();

  return (
    <div
      data-theme={theme}
      className="bg-gray-100 dark:bg-gray-800 min-h-screen min-w-screen"
    >
      <div className="bg-white dark:bg-gray-900">
        <Header className="max-w-5xl mx-auto" />
      </div>

      <main className="flex flex-col px-4 py-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Container className="h-max md:col-span-2">
            <h2 className="font-semibold text-lg">Saved locations</h2>
            <SavedLocations locations={locations} isLoading={isLoading} />
          </Container>

          <Container className="h-max md:sticky md:top-4">
            <h2 className="font-semibold text-lg">Add location</h2>
            <AddLocationForm />
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
