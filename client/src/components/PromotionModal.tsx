import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBuy: () => void;
}

const promotions = [
  {
    id: 1,
    icon: "💧",
    title: "OPEN MURID BAND WHATSAPP",
    description: "PRICE: 15K\nJOIN MARGA + 5K\n\nKEUNTUNGAN:\n➥ BISA BANED NOMOR RIPER, MANTAN, GURU\n➥ DAPAT APK CEK BAND\n➥ DAPAT WHATSAPP FC\n➥ FULL PENGAJARAN PAKE VIDEO\n➥ PASTI NYA DI AJARIN SAMPE JADI SEPUH\n➥ TEKS ANTI AMPAS/COLONG\n➥ PERMANENT\n➥ AUTO JADI KANG BANNED 🔥",
    price: "15K",
    originalPrice: "25K",
    subtitle: "BY MALL TUATHA DE"
  },
  {
    id: 2,
    icon: "🔥",
    title: "MURBUG PRIVATE",
    description: "Cukup bawa dana 10k\n\n-DIJAMIN GACOR\n-TARGET AUTO C1\n-FORCLOSE\n-INVIS HARD\n-DLL MALES YAPPING\n#TRY BOLEH ASAL NO LU",
    price: "10K",
    originalPrice: "20K",
    subtitle: "BY TUATHA DE"
  },
  {
    id: 3,
    icon: "📱",
    title: "NOKOS INDO",
    description: "INDO 5-6K (TERGANTUNG SERVER)\nLUAR NEGERI 8-500K (TERGANTUNG NEGARA)\n\nCara bikin nokos awet:\n1.Proxy minimal 6 jam\n2.Tambahkan email dan pin\n\nALL TRX NO REFF!",
    price: "5K-6K",
    originalPrice: "10K",
    subtitle: "BY MOORA STORE"
  }
];

export default function PromotionModal({ isOpen, onClose, onBuy }: PromotionModalProps) {
  const [currentPromo, setCurrentPromo] = useState(0);
  const totalPromos = promotions.length;

  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % totalPromos);
  };

  const currentPromotion = promotions[currentPromo];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-dark-blue-800 border border-electric-blue-500/30 text-white">
        <DialogTitle className="sr-only">Produk Kami</DialogTitle>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-electric-blue-500/20">
          <div>
            <h3 className="text-2xl font-bold text-electric-blue-400">Produk Kami</h3>
            <div className="flex space-x-2 mt-4">
              {promotions.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-2 rounded-full transition-colors ${
                    index === currentPromo ? "bg-electric-blue-500" : "bg-dark-blue-600"
                  }`}
                />
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Promotion Content */}
        <div className="p-3 max-h-[400px] overflow-y-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-electric-blue-500 to-electric-blue-400 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">{currentPromotion.icon}</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{currentPromotion.title}</h4>
            <div className="bg-dark-blue-700/50 rounded-xl p-3 max-h-36 overflow-y-auto">
              <pre className="text-xs text-gray-300 whitespace-pre-wrap text-left leading-relaxed">{currentPromotion.description}</pre>
            </div>
            <div className="bg-dark-blue-700/50 rounded-xl p-3">
              <div className="text-center">
                <span className="text-xl font-bold text-electric-blue-400">{currentPromotion.price}</span>
                <span className="text-gray-400 line-through ml-2 text-base">{currentPromotion.originalPrice}</span>
              </div>
              <p className="text-gray-300 mt-1 text-sm">{currentPromotion.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-electric-blue-500/20">
          <div className="flex space-x-3">
            <Button
              onClick={nextPromo}
              variant="outline"
              className="flex-1 bg-dark-blue-700 hover:bg-dark-blue-600 border-electric-blue-500/30 text-white py-2"
            >
              {currentPromo === totalPromos - 1 ? "Back to Start" : "Next"}
            </Button>
            <Button
              onClick={onBuy}
              className="flex-1 bg-gradient-to-r from-electric-blue-500 to-electric-blue-400 hover:from-electric-blue-600 hover:to-electric-blue-500 text-white py-2"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
