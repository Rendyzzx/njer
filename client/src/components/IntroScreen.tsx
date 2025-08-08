import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(onComplete, 300);
            return 100;
          }
          return prev + 2.5;
        });
      }, 100);
      
      return () => clearInterval(progressInterval);
    }, 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-dark-blue-900 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-electric-blue-500 shadow-lg">
            <img src="/Arsipnasional/Marga.jpg" alt="Tuatha De Logo" className="w-full h-full object-cover" />
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Tuatha De Official
            </h1>
            <p className="text-electric-blue-400 text-lg">
              Loading...
            </p>
          </div>
        </div>

        {/* Simple Progress Bar */}
        <div className="space-y-4">
          <div className="w-64 h-2 bg-dark-blue-700 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-electric-blue-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-electric-blue-400 font-medium text-lg">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}