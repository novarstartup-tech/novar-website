import { Play, Clock } from 'lucide-react';

type Props = {
  title: string;
  duration: string;
  category: string;
};

export function VideoCard({ title, duration, category }: Props) {
  return (
    <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-novar-cyan/40 hover:shadow-lg transition-all dark:border-slate-800 dark:bg-novar-cosmic-2">
      <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-novar-cosmic flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:bg-novar-cyan transition-all">
          <Play className="h-6 w-6 text-white group-hover:text-novar-cosmic ml-0.5" fill="currentColor" />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-novar-cyan/20 backdrop-blur-sm px-2 py-0.5 text-xs font-medium text-novar-cyan">
          {category}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded bg-black/60 backdrop-blur-sm px-2 py-0.5 text-xs text-white">
          <Clock className="h-3 w-3" />
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug line-clamp-2">{title}</h3>
      </div>
    </div>
  );
}
