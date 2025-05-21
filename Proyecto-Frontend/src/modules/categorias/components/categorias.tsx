import Image from "next/image";
import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

interface CategoriasProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function Categorias({ imageSrc, title, description }: CategoriasProps) {
  return (
    <article className="rounded-xl flex flex-col gap-3 group bg-amber-50 p-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg max-h-80 border-2 border-blue-300 bg-white">
        <Image
          width={400}
          height={400}
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <button className="rounded-full p-3 bg-blue-500 hover:bg-blue-600 shadow-lg transition-all duration-300">
        <VisibilityIcon sx={{ color: "#fffde4" }} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-semibold text-lg">{title}</h2>
        <p className="text-black text-sm">{description}</p>
      </div>
    </article>
  );
}
