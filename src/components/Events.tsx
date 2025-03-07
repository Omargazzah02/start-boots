'use client';
import React from 'react';

function Event() {
  const events = [
    { id: 1, name: "Concert de musique", likes: 150, views: 2000, imageUrl: "/images/music-event.jpg" },
    { id: 2, name: "Conférence sur la technologie", likes: 100, views: 1500, imageUrl: "/images/tech-event.jpg" },
    { id: 3, name: "Festival d'art", likes: 200, views: 3000, imageUrl: "/images/art-event.jpg" },
    { id: 4, name: "Exposition de design", likes: 120, views: 2500, imageUrl: "/images/design-event.jpg" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Liste des événements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <div key={event.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={event.imageUrl} alt={event.name} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{event.name}</h3>

              <div className="flex items-center space-x-3 mb-2">
                <img 
                  src="/images/eye-icon.png" 
                  alt="Vues" 
                  className="w-5 h-5 text-gray-500 hover:text-blue-500 transition duration-300" 
                />
                <p className="text-sm text-gray-500">{event.views}</p>
              </div>

              <div className="flex items-center space-x-3">
                <img 
                  src="/images/like-icon.png" 
                  alt="J'adore" 
                  className="w-5 h-5 text-gray-500 hover:text-red-500 transition duration-300" 
                />
                <p className="text-sm text-gray-500">{event.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
