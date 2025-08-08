import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  telegram: string;
}

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const teamMembers: TeamMember[] = [
  {
    id: "creator",
    name: "Akira",
    role: "Creator Web",
    image: "/Arsipnasional/creator.jpg",
    telegram: "https://t.me/akirasukakeju"
  },
  {
    id: "owner", 
    name: "Mall",
    role: "Owner",
    image: "/Arsipnasional/owner.jpg",
    telegram: "https://t.me/MallTuathaDe"
  },
  {
    id: "partner",
    name: "Raphael", 
    role: "Partner",
    image: "/Arsipnasional/patner.jpg",
    telegram: "https://t.me/RaphaelLovePeace"
  }
];

export default function TeamModal({ isOpen, onClose }: TeamModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-dark-blue-800 border border-electric-blue-500/30 text-white">
        <DialogTitle className="sr-only">Tim Tuatha De</DialogTitle>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-electric-blue-500/20">
          <div className="flex items-center space-x-3">
            <img 
              src="/Arsipnasional/Marga.jpg" 
              alt="Marga Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-electric-blue-500"
            />
            <h3 className="text-xl font-bold text-electric-blue-400">Tim Tuatha De</h3>
          </div>
        </div>

        {/* Team Members */}
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-dark-blue-700/50 border border-electric-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-electric-blue-500/40 transition-colors"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-electric-blue-500 flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-white truncate">{member.name}</h4>
                    <p className="text-electric-blue-400 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    onClick={() => window.open(member.telegram, '_blank')}
                    size="sm"
                    className="bg-gradient-to-r from-electric-blue-500 to-electric-blue-400 hover:from-electric-blue-600 hover:to-electric-blue-500 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Contact
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}