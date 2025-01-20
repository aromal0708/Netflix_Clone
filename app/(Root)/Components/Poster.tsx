
const Poster = ({ path }: { path: string }) => {
  const imageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;
  return (
    <div className="p-2 w-full flex">
      <img
      alt="posterImage"
        src={imageUrl + path}
        className="h-64 w-48 mx-2 contain-content container"
      />
    </div>
  );
};

export default Poster;
