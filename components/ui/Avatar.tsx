"use client";

interface AvatarProps {
  src?: string;
  name: string;
  size?: number;
}

export default function Avatar({
  src,
  name,
  size = 50,
}: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      {src ? (
        <img
          src={src}
          alt={name}
          style={{
            width: size,
            height: size,
          }}
          className="rounded-full object-cover"
        />
      ) : (
        <div
          style={{
            width: size,
            height: size,
          }}
          className="flex items-center justify-center rounded-full bg-blue-600 font-semibold text-white"
        >
          {initials}
        </div>
      )}
    </>
  );
}