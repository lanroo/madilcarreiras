import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactMap = ({
  title,
  address,
  mapUrl,
  icon: Icon,
}: {
  title: string;
  address: string;
  mapUrl: string;
  icon?: any;
}) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setShowMap(true)}
      onMouseLeave={() => setShowMap(false)}
    >
      <div className="flex items-center space-x-4">
        {Icon && (
          <div className="bg-blue-500/20 p-4 rounded-xl">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{address}</p>
        </div>
      </div>

      {showMap && (
        <div className="absolute left-0 mt-4 w-full bg-white border rounded-lg shadow-lg p-2 z-50">
          <iframe
            src={mapUrl}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center text-blue-600 hover:underline"
          >
            Abrir no Google Maps
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ContactMap;
