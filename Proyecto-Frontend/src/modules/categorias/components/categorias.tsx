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
      <div className="relative overflow-hidden rounded-xl max-h-96">
        <Image
          width={500}
          height={500}
          src={imageSrc}
          alt={title}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="w-full h-full opacity-0 group-hover:opacity-90 bg-neutral-900 absolute top-0 left-0 flex justify-center items-center transition-all">
          <button className="rounded-lg p-4 opacity-0 group-hover:opacity-100 bg-neutral-700 transition-all scale-0 group-hover:scale-100 duration-300">
            <VisibilityIcon sx={{ color: "#fef08a" }} />
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
