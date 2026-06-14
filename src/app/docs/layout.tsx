import { DocsSidebar } from '@/components/DocsSidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl lg:flex">
        <DocsSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
