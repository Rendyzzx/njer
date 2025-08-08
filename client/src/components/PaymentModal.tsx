import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle, Copy, Download } from "lucide-react";
import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [showDanaNumbers, setShowDanaNumbers] = useState(false);
  const [showQRIS, setShowQRIS] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadQRIS = () => {
    const link = document.createElement("a");
    link.href = "https://files.catbox.moe/47vb6i.jpg";
    link.download = "QRIS-TuathaDeOfficial.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-dark-blue-800 border border-electric-blue-500/30 text-white">
        <DialogTitle className="sr-only">Informasi Pembayaran</DialogTitle>

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-electric-blue-500/20">
          <h3 className="text-xl font-bold text-electric-blue-400">
            Payment Information
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Payment Content */}
        <div className="p-4 space-y-4">
          {/* Payment Methods */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">
              Pilih Metode Pembayaran
            </h4>
            <div className="space-y-3">
              {/* DANA */}
              <div className="bg-dark-blue-700/50 border border-electric-blue-500/20 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-semibold text-sm">DANA</h5>
                      <p className="text-gray-400 text-xs">
                        Digital wallet payment
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowDanaNumbers(!showDanaNumbers)}
                    className="bg-electric-blue-500 hover:bg-electric-blue-600 text-white text-xs px-2 py-1"
                    size="sm"
                  >
                    {showDanaNumbers ? "Tutup" : "Lihat"}
                  </Button>
                </div>

                {showDanaNumbers && (
                  <div className="mt-3 space-y-2 border-t border-electric-blue-500/20 pt-3">
                    <div className="bg-dark-blue-600/50 p-2 rounded flex items-center justify-between">
                      <p className="text-electric-blue-400 font-mono text-sm">
                        6281249578370
                      </p>
                      <Button
                        onClick={() => copyToClipboard("6281249578370")}
                        size="sm"
                        variant="outline"
                        className="border-electric-blue-500/30 hover:bg-electric-blue-500/20 p-1"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="bg-dark-blue-600/50 p-2 rounded flex items-center justify-between">
                      <p className="text-electric-blue-400 font-mono text-sm">
                        6288989596269
                      </p>
                      <Button
                        onClick={() => copyToClipboard("6288989596269")}
                        size="sm"
                        variant="outline"
                        className="border-electric-blue-500/30 hover:bg-electric-blue-500/20 p-1"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* QRIS */}
              <div className="bg-dark-blue-700/50 border border-electric-blue-500/20 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-semibold text-sm">QRIS</h5>
                      <p className="text-gray-400 text-xs">
                        Scan QR code untuk pembayaran
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button
                      onClick={() => setShowQRIS(!showQRIS)}
                      className="bg-electric-blue-500 hover:bg-electric-blue-600 text-white text-xs px-2 py-1"
                      size="sm"
                    >
                      {showQRIS ? "Tutup" : "Lihat"}
                    </Button>
                    <Button
                      onClick={downloadQRIS}
                      className="bg-green-500 hover:bg-green-600 text-white p-1"
                      size="sm"
                    >
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {showQRIS && (
                  <div className="mt-3 border-t border-electric-blue-500/20 pt-3">
                    <div className="bg-dark-blue-600/50 p-2 rounded text-center">
                      <img
                        src="https://files.catbox.moe/47vb6i.jpg"
                        alt="QRIS Code"
                        className="w-32 h-32 mx-auto rounded border border-electric-blue-500/30"
                      />
                      <p className="text-gray-400 text-xs mt-1">
                        Scan untuk pembayaran via QRIS
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Warning Message */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h5 className="text-yellow-500 font-semibold mb-2">
                  Konfirmasi Pembayaran Diperlukan
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  Setelah melakukan pembayaran, silakan konfirmasi ke admin kami
                  di Telegram:
                </p>

                {/* Admin Contacts */}
                <div className="space-y-2">
                  <a
                    href="https://t.me/MallTuathaDe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-electric-blue-400 hover:text-electric-blue-300 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.18 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.54-4.1c.2-.18-.04-.28-.3-.1L9.28 13.47l-2.42-.76c-.53-.16-.54-.52.11-.78l9.46-3.64c.44-.16.83.1.69.8z" />
                    </svg>
                    <span>Admin 1: MallTuathaDe</span>
                  </a>
                  <a
                    href="https://t.me/akirasukakeju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-electric-blue-400 hover:text-electric-blue-300 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.18 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.54-4.1c.2-.18-.04-.28-.3-.1L9.28 13.47l-2.42-.76c-.53-.16-.54-.52.11-.78l9.46-3.64c.44-.16.83.1.69.8z" />
                    </svg>
                    <span>Admin 2: akirasukakeju</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-electric-blue-500/20">
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full bg-dark-blue-700 hover:bg-dark-blue-600 border-electric-blue-500/30 text-white"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}