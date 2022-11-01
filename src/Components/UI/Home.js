import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-header">
        Welcome to the Home Page
      </h1>
      <p className="p1">
        Praesent at ultrices ligula. Suspendisse ut ex laoreet orci convallis rutrum at id leo.
        Morbi placerat tincidunt massa eget iaculis.
        Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Praesent in dolor vitae diam bibendum bibendum.
        Vestibulum feugiat justo libero, nec pellentesque turpis tincidunt at.
        In ac commodo libero, in vehicula felis. Duis ac nunc est.
      </p>

      <p className="p2">
        Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, nec
        tincidunt nunc nisl euismod nunc. Nulla facilisi. Donec auctor, nisl eget ultricies lacinia,
        nisl nunc aliquet nisl, nec tincidunt nunc nisl euismod nunc. Nulla facilisi.
      </p>
    </div>
  );
}
