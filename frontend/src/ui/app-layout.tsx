import Header from "../components/header";
import Navigation from "../components/navigation";

export default function AppLayout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="h-svh flex flex-col">
      <Header text={title} />

      <main className="flex-1 overflow-y-scroll px-5">{children}</main>

      <Navigation />
    </div>
  );
}
