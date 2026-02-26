const Crafts = () => {
  return (
    <div className='w-full max-w-[500px] py-[32px] '>
      <div></div>
        <h1 className="text-[24px] tracking-tighter">Crafts</h1>

        {/* add crafts here */}
        
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="max-w-[360px] aspect-1/1 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbxnzwkgi&public_id=0226_2_2_apzp4d&player[autoplay]=true&player[controls]=false&player[muted]=true&player[loop]=true"
                className="w-full h-full"
                allow="autoplay; loop; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className="max-w-[360px] aspect-1/1 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbxnzwkgi&public_id=0226_3_x4pook&player[autoplay]=true&player[controls]=false&player[muted]=true&player[loop]=true"
                className="w-full h-full"
                allow="autoplay; loop; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className="max-w-[360px] aspect-1/1 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbxnzwkgi&public_id=0226_4_lbgfob&player[autoplay]=true&player[controls]=false&player[muted]=true&player[loop]=true"
                className="w-full h-full"
                allow="autoplay; loop; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className="max-w-[360px] aspect-1/1 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbxnzwkgi&public_id=0226_5_lenoge&player[autoplay]=true&player[controls]=false&player[muted]=true&player[loop]=true"
                className="w-full h-full"
                allow="autoplay; loop; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className="max-w-[360px] aspect-1/1 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbxnzwkgi&public_id=0226_6_uwvxvd&player[autoplay]=true&player[controls]=false&player[muted]=true&player[loop]=true"
                className="w-full h-full"
                allow="autoplay; loop; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>
    
  )
}

export default Crafts
