import React from 'react';
import TourismPichi from './TourismPichi';
import './CareTaker.css'

const Tourism = () => { 

    const famousTemples = [
        {
          title: "Tirupati Balaji Temple",
          image:'https://images.hindustantimes.com/img/2021/02/28/1600x900/venkateswara-temple_4506d2b4-9f29-11ea-8b22-f47c01eaa370_1614482205206.jpg',
          location: "Andhra Pradesh",
          description: "Dedicated to Lord Venkateshwara, this temple in Andhra Pradesh is renowned for its spiritual significance, attracting millions of devotees annually. It's known for its opulent architecture and is considered one of the richest temples globally.",
          rating: 4.8
        },
        {
          title: "Vaishno Devi Temple",
          image:'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/03/vaishnodevi-1616475118.jpg',
          location: "Jammu and Kashmir",
          description: "Perched atop the Trikuta Mountains in Jammu and Kashmir, this temple dedicated to Goddess Vaishno Devi is a revered pilgrimage site. Devotees undertake a challenging trek to seek blessings at the shrine.",
          rating: 4.7
        },
        {
          title: "Golden Temple (Harmandir Sahib)",
          image:'https://i.pinimg.com/originals/98/7e/f1/987ef146ca14c2622144836ee12450a5.jpg',
          location: "Punjab",

          description: "Located in Amritsar, Punjab, this iconic Sikh Gurdwara, covered in gold plating, symbolizes equality and spiritual integrity. It's a spiritual center that welcomes people from all walks of life.",
          rating: 4.9
        },
        {
          title: "Kashi Vishwanath Temple",
          image:'https://e1.pxfuel.com/desktop-wallpaper/459/185/desktop-wallpaper-kashi-watch-aerial-view-of-the-kashi-vishwanath-dham-corridor-inaugurated-by-pm-modi-kashi-vishwanath-thumbnail.jpg',
          location: "Uttar Pradesh",
          description: "Situated in Varanasi, Uttar Pradesh, this temple dedicated to Lord Shiva holds immense religious importance. It's one of the oldest and holiest temples and attracts devotees from around the world.",
          rating: 4.6
        },
        {
          title: "Jagannath Temple",
          image:'https://purijagannathadarshan.in/wp-content/uploads/2022/12/desk.jpg',
          location: "Odisha",
          description: "Found in Puri, Odisha, this temple dedicated to Lord Jagannath hosts the famous Rath Yatra festival. It's a significant Hindu pilgrimage site known for its rituals and traditions.",
          rating: 4.5
        },
        {
          title: "Meenakshi Temple",
          image:'https://e1.pxfuel.com/desktop-wallpaper/770/582/desktop-wallpaper-of-madurai-meenakshi-amman-temple-meenakshi-temple.jpg',
          location: "Tamil Nadu",
          description: "Located in Madurai, Tamil Nadu, this temple dedicated to Goddess Meenakshi showcases stunning Dravidian architecture. It's a marvel with intricately carved sculptures and vibrant temple rituals.",
          rating: 4.7
        },
        {
          title: "Somnath Temple",
          image:'https://w0.peakpx.com/wallpaper/173/294/HD-wallpaper-somnath-temple-dharmik-sthal.jpg',
          location: "Gujarat",
          description: "Situated in Gujarat, this temple dedicated to Lord Shiva is one of the twelve Jyotirlinga shrines. It has a rich history and is a revered place of worship for devotees.",
          rating: 4.6
        },
        {
          title: "Badrinath Temple",
          image:'https://www.holidify.com/images/bgImages/BADRINATH.jpg',
          location: "Uttarakhand",
          description: "Nestled in Uttarakhand, this temple dedicated to Lord Vishnu is part of the Char Dham Yatra. It's surrounded by breathtaking Himalayan views and holds immense spiritual significance.",
          rating: 4.8
        },
        {
          title: "Konark Sun Temple",
          image:'https://w0.peakpx.com/wallpaper/501/251/HD-wallpaper-the-sun-temple-konark-orissa-india-architecture-surya-sun-ancient-hinduism-lord-india-sun-god-skies-temple.jpg',
          location: "Odisha",
          description: "A UNESCO World Heritage Site in Odisha, this temple is known for its architectural brilliance depicting the chariot of the Sun God. It's an architectural marvel and a testament to ancient craftsmanship.",
          rating: 4.6
        },
        {
          title: "Ramanathaswamy Temple",
          image:'https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/rameswaram-temple-1656167436_f2c551193bb7d4bc6f70.webp',
          location: "Tamil Nadu",
          description: "Found in Rameswaram, Tamil Nadu, this temple dedicated to Lord Shiva is one of the twelve Jyotirlinga shrines. It's known for its majestic corridors and religious rituals.",
          rating: 4.5
        },
        {
            title: "Siddhivinayak Temple",
            image:'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/01/21/Pictures/plating-devotee-around-delhi-weighing-donated-gold_2f6fc288-3c2a-11ea-bfbd-f812f33ac46f.jpg',
            location: "Maharashtra",
            description: "Situated in Mumbai, Maharashtra, this temple dedicated to Lord Ganesha is a popular pilgrimage site, visited by thousands seeking blessings for success and prosperity.",
            rating: 4.5
          },
          {
            title: "Sri Padmanabhaswamy Temple",
            image:'https://cdn.pixabay.com/photo/2020/04/13/09/11/trivandrum-5037425_1280.jpg',
            location: "Kerala",
            description: "Located in Thiruvananthapuram, Kerala, this temple dedicated to Lord Vishnu is known for its architectural beauty and the secret chambers holding treasures.",
            rating: 4.7
          },
          {
            title: "Sri Ranganathaswamy Temple",
            image:'https://jonistravelling.com/wp-content/uploads/2018/07/Sri-Ranganathaswamy-Temple-rooftop-view.jpg',
            location: "Tamil Nadu",
            description: "Found in Srirangam, Tamil Nadu, this temple dedicated to Lord Ranganatha (a form of Lord Vishnu) is one of the largest functioning Hindu temples in the world.",
            rating: 4.8
          },
          {
            title: "Dwarkadhish Temple",
            image:'https://t4.ftcdn.net/jpg/01/92/43/19/360_F_192431988_CSRkrIrUNWVqXHtoe3WRW2HjoXRImnbp.jpg',
            location: "Gujarat",
            description: "Located in Dwarka, Gujarat, this temple dedicated to Lord Krishna is one of the Char Dham pilgrimage sites and holds immense spiritual significance.",
            rating: 4.6
          },
          {
            title: "Kedarnath Temple",
            image:'https://pbs.twimg.com/media/E4pSbZbVUAQr-eS.jpg',
            location: "Uttarakhand",
            description: "Nestled in the Himalayas in Uttarakhand, this temple dedicated to Lord Shiva is one of the Char Dham Yatra sites and is a revered place of worship.",
            rating: 4.7
          }
      ];
      
      
      

  return (
    <div className="register-background">
      {famousTemples.map((temples, index) => (
        <TourismPichi key={index} temples={temples} />
      ))}
    </div>
  );
};

export default Tourism;