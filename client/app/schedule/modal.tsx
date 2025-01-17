import React from 'react';
import { X } from 'lucide-react';

interface Topic {
  title: string;
  description: string;
}

interface ModuleTopicsModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: string;
  topics: Topic[];
}

const ModuleTopicsModal: React.FC<ModuleTopicsModalProps> = ({ 
  isOpen, 
  onClose, 
  module, 
  topics 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Important Topics - {module}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleTopicsModal;