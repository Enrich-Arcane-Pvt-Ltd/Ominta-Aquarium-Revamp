"use client";

import Image from "next/image";
import React from "react";

const LatestPosts: React.FC = () => {
  const posts = [
    {
      image: "/images/img8.jpg",
      date: "Dec 28, 2016",
      title: "Looking for aquarium specialists?",
      description:
        "Are you looking for equipment for your aquarium? Look no further than Ominta-Aquarium. We stock all aspects of aquarium equipment.",
    },
    {
      image: "/images/img9.jpg",
      date: "Dec 18, 2016",
      title: "Different aquariums for different ideas",
      description:
        "With the ever-growing popularity of keeping marine fish, we have installed our aquariums not only in private residences but also in public spaces.",
    },
    {
      image: "/images/img5.jpg",
      date: "Dec 5, 2016",
      title: "Fishes, corals and more",
      description:
        "Our service covers all types of aquariums — from cold water to tropical, freshwater, and marine fish-only systems.",
    },
    {
      image: "/images/img8.jpg",
      date: "Dec 28, 2016",
      title: "Looking for aquarium specialists?",
      description:
        "Are you looking for equipment for your aquarium? Look no further than Ominta-Aquarium. We stock all aspects of aquarium equipment.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Latest Posts</h2>
        <div className="text-cyan-600 text-3xl mb-12">~</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <p className="text-cyan-700 text-xs font-semibold uppercase mb-3">
                  {post.date}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
                <button className="bg-cyan-600 text-white px-5 py-2 rounded-sm text-sm font-semibold uppercase hover:bg-cyan-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
