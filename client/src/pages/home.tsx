import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import IntroScreen from "@/components/IntroScreen";
import PromotionModal from "@/components/PromotionModal";
import PaymentModal from "@/components/PaymentModal";
import TeamModal from "@/components/TeamModal";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showPromotionModal, setShowPromotionModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setShowTeamModal(true);
    }, 500);
  };

  const handleTeamModalClose = () => {
    setShowTeamModal(false);
    setTimeout(() => {
      setShowMainContent(true);
    }, 300);
  };

  const handleOpenPromotions = () => {
    setShowPromotionModal(true);
  };

  const handleClosePromotions = () => {
    setShowPromotionModal(false);
  };

  const handleBuyNow = () => {
    setShowPromotionModal(false);
    setShowPaymentModal(true);
  };

  const handleClosePayment = () => {
    setShowPaymentModal(false);
  };

  return (
    <div className="min-h-screen font-inter bg-dark-blue-900 text-white overflow-x-hidden">
      {/* Intro Screen */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Video Background - Fixed and locked */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            minWidth: '100%',
            minHeight: '100%',
            zIndex: -1
          }}
        >
          <source
            src="/Arsipnasional/Video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-dark-blue-900/70 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showMainContent ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >

        {/* Header */}
        <header className="relative z-10 p-6 lg:p-8">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-electric-blue-500">
                <img src="/Arsipnasional/Marga.jpg" alt="Tuatha De Logo" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-electric-blue-300 bg-clip-text text-transparent">
                Tuatha De Official
              </h1>
            </div>


          </nav>
        </header>

        {/* Hero Section */}
        <main className="relative z-10 min-h-screen flex items-center justify-center px-6 -mt-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-24 rounded-full overflow-hidden border-4 border-electric-blue-500 mx-auto mb-6 shadow-2xl"
            >
              <img src="/Arsipnasional/Marga.jpg" alt="Tuatha De Logo" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-electric-blue-300 to-electric-blue-400 bg-clip-text text-transparent"
            >
              Tuatha De Official
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8"
            >
              Website ini dibuat untuk membeli produk dari marga kami. kami harap kami dapat membantu semaksimal mungkin
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Button
                onClick={handleOpenPromotions}
                className="bg-gradient-to-r from-electric-blue-500 to-electric-blue-400 hover:from-electric-blue-600 hover:to-electric-blue-500 px-8 py-4 text-lg font-semibold text-white transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Lihat produk
              </Button>
              
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
              >
                <p className="text-gray-400 text-sm font-medium">
                  © 2025 Copyright by <span className="text-electric-blue-400 font-semibold">AkiraX</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </motion.div>

      {/* Modals */}
      <TeamModal
        isOpen={showTeamModal}
        onClose={handleTeamModalClose}
      />
      <PromotionModal
        isOpen={showPromotionModal}
        onClose={handleClosePromotions}
        onBuy={handleBuyNow}
      />
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={handleClosePayment}
      />
    </div>
  );
}
