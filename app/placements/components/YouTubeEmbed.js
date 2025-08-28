export default function YouTubeEmbed() {
  return (
    <div className="relative w-[80%] mx-auto pb-[45%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/bg8jp1BjYGA?si=W9lE_V0KzABX_0VB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
