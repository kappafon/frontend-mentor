import { Button } from '@/components/ui/button';

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold">
                Vite + React + TypeScript + Shadcn UI
            </h1>
            <Button>Shadcn UI Button</Button>
            <Button variant="outline">Shadcn UI Button</Button>
        </div>
    );
};

export default App;
