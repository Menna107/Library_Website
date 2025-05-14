const books = [
  // Trending Books
  { id: 1, title: "Read People Like a Book", image: "photos of the project/WhatsApp Image 2025-03-29 at 11.36.39 AM (1).jpeg", category: "trending", author: "Patrick King", description: "A practical guide to decoding body language and behavior to understand others more effectively." },

  { id: 2, title: "Reforers Arise", image: "photos of the project/61qrd-5Qg6L._AC_UY327_FMwebp_QL65_.webp", category: "trending", author: "Clemantine Wamariya & Elizabeth Weil", description: "A powerful memoir of survival, identity, and rebuilding life after escaping genocide in Rwanda." },

  { id: 3, title: "21 Lessons for the 21st Century", image: "photos of the project/71VSswnjh9L._AC_UY327_FMwebp_QL65_.webp", category: "trending", author: "Yuval Noah Harari", description: "A thought-provoking analysis of the most pressing issues facing humanity in the modern era." },

  { id: 4, title: "Jeffrey Archer", image: "photos of the project/81DCNiN-L-L._AC_UY327_FMwebp_QL65_.webp", category: "trending", author: "Jeffrey Archer", description: "Bestselling British author known for gripping political thrillers and dramatic fiction." },

  { id: 5, title: "Jungle Book", image: "photos of the project/91NIKLeV64L._AC_UY327_FMwebp_QL65_.webp", category: "trending", author: "Rudyard Kipling", description: "A classic collection of stories about a boy raised by animals in the Indian jungle." },

  { id: 6, title: "The Boy Who Knew Too Much", image: "photos of the project/1250189993.01._SX400_SCLZZZZZZZ_.jpg", category: "trending", author: "Cathy Byrd", description: "The incredible story of a young boy who recalls a past life as a famous baseball player." },

  { id: 7, title: "Control Master", image: "photos of the project/WhatsApp Image 2025-03-29 at 11.36.40 AM.jpeg", category: "trending", author: "Peter Masters", description: "A guide to understanding personal boundaries, influence, and mastering emotional control." },

  { id: 8, title: "Charlotte’s Web", image: "photos of the project/WhatsApp Image 2025-03-29 at 11.36.39 AM (2).jpeg", category: "trending", author: "E. B. White", description: "A heartwarming tale of friendship between a pig named Wilbur and a clever spider, Charlotte." },

  { id: 9, title: "Game of Thrones", image: "photos of the project/WhatsApp Image 2025-03-29 at 11.36.39 AM (3).jpeg", category: "trending", author: "George R. R. Martin", description: "The first book in the epic fantasy series 'A Song of Ice and Fire' full of power struggles and intrigue." },

  { id: 10, title: "Onyx Storm", image: "photos of the project/WhatsApp Image 2025-03-29 at 11.36.39 AM.jpeg", category: "trending", author: "Rebecca Yarros", description: "The third installment in the 'Empyrean' series, continuing the high-stakes adventures of dragon riders." },

  { id: 11, title: "Greenlights", image: "photos of the project/WhatsApp Image 2025-03-29 at 1.24.43 PM.jpeg", category: "trending", author: "Matthew McConaughey", description: "An unconventional memoir filled with life lessons, personal stories, and motivational insights." },

  { id: 12, title: "Black Hole Survival", image: "photos of the project/WhatsApp Image 2025-03-29 at 1.24.42 PM.jpeg", category: "trending", author: "Janna Levin", description: "A fascinating exploration of black holes and what they reveal about the nature of the universe." },

  { id: 13, title: "Martin Eden", image: "photos of the project/WhatsApp Image 2025-03-29 at 1.24.42 PM (2).jpeg", category: "trending", author: "Jack London", description: "A semi-autobiographical novel about a working-class writer’s quest for artistic success and recognition." },

  { id: 14, title: "Psychology of Money", image: "photos of the project/WhatsApp Image 2025-03-29 at 1.24.42 PM (1).jpeg", category: "trending", author: "Morgan Housel", description: "A collection of insightful stories about how people think about money, wealth, and financial decisions." },

  // Kids Books
  { id: 15, title: "Goldilocks and the Three Bears", image: "photos of the project/71KYNteEAoL._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Robert Southey", description: "A classic tale of a curious girl who enters the house of three bears and experiences their belongings." },

  { id: 16, title: "Wizard Roars", image: "photos of the project/81Fmwur-Y6L._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Jenny McLachlan", description: "An adventurous fantasy where children enter a magical world filled with dragons and daring quests." },

  { id: 17, title: "Our World", image: "photos of the project/91FACeJFtPL._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Sue Lowell Gallion", description: "An engaging introduction to geography, exploring Earth's diverse landscapes and environments." },

  { id: 18, title: "The Polar Bear Explorers", image: "photos of the project/91hYcdU-hKL._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Alex Bell", description: "A thrilling journey with young explorers venturing into icy realms to uncover hidden secrets." },

  { id: 19, title: "Jungle Book", image: "photos of the project/91NIKLeV64L._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Rudyard Kipling", description: "A collection of stories about a boy raised by animals in the jungle, learning life's lessons." },

  {id:44, title:"planet earth" ,image:"photos of the project/91PpNX9H2RL._AC_UY327_FMwebp_QL65_.webp",category: "kids", author: "kim smith" , description:" Planet Earth III is a breathtaking book that takes you on a journey through the planet’s wildest places. Packed with stunning photos and real stories, it shows how animals live—and survive—in a world shaped by humans."},

  { id: 20, title: "The Creakers", image: "photos of the project/816h1o3yBKL._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Tom Fletcher", description: "A whimsical story where children discover mysterious creatures lurking beneath their beds." },

  { id: 21, title: "Amazing Earth", image: "photos of the project/913K2N7--nL._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Anita Ganeri", description: "A captivating exploration of Earth's wonders, from towering mountains to deep oceans." },

  { id: 22, title: "Llama in Red Pajamas", image: "photos of the project/A1OQ1R+4npL._AC_UY327_FMwebp_QL65_.webp", category: "kids", author: "Anna Dewdney", description: "A charming bedtime story highlighting a young llama's nighttime anxieties and comfort." },

  { id: 23, title: "Charlotte’s Web", image: "photos of the project/WhatsApp Image 2025-03-29 at 11.36.39 AM (2).jpeg", category: "kids", author: "E. B. White", description: "A touching tale of friendship between a pig and a spider, emphasizing love and sacrifice." },

  // Adventure Books
  { id: 24, title: "The Secret Garden", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.25.05 PM (1).jpeg", category: "adventure", author: "Frances Hodgson Burnett", description: "A young orphan discovers a hidden, neglected garden that transforms her life and those around her." },

  { id: 25, title: "Purple House", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.25.05 PM (2).jpeg", category: "adventure", author: "Leonard Kessler", description: "Mr. Pine paints his house purple to stand out, inspiring his neighbors to embrace individuality." },

  { id: 26, title: "Raven Captivating", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.25.05 PM.jpeg", category: "adventure", author: "K. M. Shea", description: "A retelling of the classic fairy tale with a strong heroine and magical twists." },

  { id: 27, title: "Great Expectations", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.25.06 PM.jpeg", category: "adventure", author: "Charles Dickens", description: "The journey of an orphan named Pip as he navigates love, wealth, and personal growth in Victorian England." },

  { id: 28, title: "Jane Eyre", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.25.50 PM (1).jpeg", category: "adventure", author: "Charlotte Brontë", description: "An orphaned governess overcomes hardships and discovers love while maintaining her moral integrity." },

  { id: 29, title: "Oliver Twist", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.25.50 PM.jpeg", category: "adventure", author: "Charles Dickens", description: "A young orphan's struggle to survive in London's underworld, highlighting social injustices." },

  { id: 30, title: "The Hidden Ways", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.25.51 PM.jpeg", category: "adventure", author: "Alistair Moffat", description: "Exploring Scotland's forgotten paths to uncover the nation's rich history and heritage." },

  { id: 31, title: "The Witcher", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.26.04 PM (1).jpeg", category: "adventure", author: "Andrzej Sapkowski", description: "Geralt of Rivia, a monster hunter, navigates a world of magic, politics, and moral ambiguity." },

  { id: 32, title: "The Murder of Roger Ackroyd", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.26.04 PM.jpeg", category: "adventure", author: "Agatha Christie", description: "A thrilling detective novel where Hercule Poirot investigates a murder on a luxurious train." },

  { id: 33, title: "Redemption", image: "photos of the project/WhatsApp Image 2025-03-29 at 1.53.03 PM (1).jpeg", category: "adventure", author: "Karen Kingsbury & Gary Smalley", description: "A tale of love, betrayal, and the power of forgiveness within a family." },

  { id: 34, title: "Sherlock Holmes", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.26.52 PM.jpeg", category: "adventure", author: "Arthur Conan Doyle", description: "The legendary detective uses logic and observation to solve complex cases in Victorian London." },

  { id: 35, title: "Cursed Library", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.28.23 PM (1).jpeg", category: "adventure", author: "K.R. Alexander", description: "A mysterious library traps its visitors, and a group of kids must uncover its secrets to escape." },

  { id: 36, title: "Murder on the Orient Express", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.28.23 PM (2).jpeg", category: "adventure", author: "Agatha Christie", description: "Detective Hercule Poirot investigates a murder aboard a snowbound luxury train." },

  { id: 37, title: "War Crimes", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.28.24 PM.jpeg", category: "adventure", author: "David McKee", description: "A dramatic exploration of the effects of war and human conflict on global relationships." },

  { id: 38, title: "Autumn Chills", image: "photos of the project/WhatsApp Image 2025-03-30 at 3.28.24 PM.jpeg", category: "adventure", author: "Agatha Christie", description: "A collection of suspenseful tales perfect for autumn nights, showcasing Christie's storytelling prowess." },

  {  id: 39, title: "The Hound of the Baskervilles", image: "photos of the project/The%20Hound%20of%20the%20Baskervilles%20by%20Sir%20Arthur%20Conan….jpeg", category: "adventure", author: "Arthur Conan Doyle", description: "A gripping mystery that follows Sherlock Holmes and Dr. Watson as they investigate the strange death of Sir Charles Baskerville and the legend of a ghostly hound."},

  {
      id: 40,
      title: "David Copperfield",
      image: "photos of the project/David%20Copperfield.jpeg",
      category: "adventure",
      author: "Charles Dickens",
      description: "The story of David Copperfield, following his experiences growing up, dealing with hardships, and finding his place in the world."
  },
  {
      id: 41,
      title: "A Tale of Two Cities",
      image: "photos of the project/A%20Tale%20of%20Two%20Cities.jpeg",
      category: "historical fiction",
      author: "Charles Dickens",
      description: "A story set during the French Revolution, following the lives of two men and their struggles amidst the turmoil of revolutionary Paris and London."
  },
  {
      id: 42,
      title: "The Midnight Garden",
      image: "photos of the project/Fantasy%20Book%20Cover%20Design.jpeg",
      category: "fantasy",
      author: "Various",
      description: "A mystical and enchanting story set in a magical garden that appears only at midnight, weaving together themes of mystery and wonder."
  },
  {
      id: 43,
      title: "Man of Peril",
      image: "photos of the project/Man%20of%20Peril%20-%20Thriller%20Book%20Cover%20Design.jpeg",
      category: "thriller",
      author: "Various",
      description: "A thrilling tale of a man caught in a perilous situation, battling forces beyond his control while trying to uncover the truth behind a dark conspiracy."
  }
];

localStorage.setItem("books", JSON.stringify(books));

