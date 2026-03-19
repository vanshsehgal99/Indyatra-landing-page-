// Scroll-triggered fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.style.opacity = '1';
        el.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.dest-card, .activity-item, .contact-detail').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Stagger dest cards
  document.querySelectorAll('.dest-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });

  document.querySelectorAll('.activity-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
  });

  // Nav scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(26,20,16,0.97)';
      nav.style.backdropFilter = 'blur(12px)';
      nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    } else {
      nav.style.background = 'linear-gradient(to bottom, rgba(26,20,16,0.95), transparent)';
      nav.style.backdropFilter = 'blur(2px)';
      nav.style.borderBottom = 'none';
    }
  });

  // ── EXPLORE INDIA DATA ──
  const destinations = [
    // NORTH
    { name: "Agra", state: "Uttar Pradesh", region: "north", type: "Heritage", desc: "Home to the Taj Mahal — one of the Seven Wonders of the World and a crown jewel of Mughal architecture.", tags: ["UNESCO", "Monuments", "History"], img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80" },
    { name: "Delhi", state: "Delhi", region: "north", type: "City", desc: "India's capital blends Old Delhi's Mughal grandeur with modern New Delhi. Red Fort, Qutub Minar, and India Gate await.", tags: ["Culture", "Food", "History"], img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80" },
    { name: "Jaipur", state: "Rajasthan", region: "north", type: "Heritage", desc: "The Pink City — Amber Fort, Hawa Mahal, and the walled city's rosy facades make it India's most photogenic destination.", tags: ["UNESCO", "Forts", "Royalty"], img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80" },
    { name: "Udaipur", state: "Rajasthan", region: "north", type: "Heritage", desc: "The City of Lakes, with its stunning Lake Pichola, City Palace, and island palaces make it India's most romantic city.", tags: ["Lakes", "Palaces", "Romance"], img: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80" },
    { name: "Jodhpur", state: "Rajasthan", region: "north", type: "Heritage", desc: "The Blue City. Mehrangarh Fort towers over a sea of cobalt-blue houses, bazaars and ancient temples.", tags: ["Forts", "Desert", "Culture"], img: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80" },
    { name: "Jaisalmer", state: "Rajasthan", region: "north", type: "Adventure", desc: "A living fort city emerging from the golden Thar Desert. Camel safaris, sand dunes, and opulent havelis.", tags: ["Desert", "Adventure", "Forts"], img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80" },
    { name: "Varanasi", state: "Uttar Pradesh", region: "north", type: "Spiritual", desc: "One of the world's oldest cities and Hinduism's holiest. The Ganges ghats, Ganga Aarti, and ancient temples.", tags: ["Spiritual", "Ghats", "Culture"], img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80" },
    { name: "Leh — Ladakh", state: "Ladakh", region: "north", type: "Adventure", desc: "High-altitude desert realm of monasteries, turquoise lakes, and some of the world's highest motorable passes.", tags: ["Adventure", "Mountains", "Monasteries"], img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
    { name: "Amritsar", state: "Punjab", region: "north", type: "Spiritual", desc: "The Golden Temple — holiest shrine of Sikhism — shimmers on a sacred pool. Jallianwala Bagh, the Wagah border ceremony.", tags: ["Spiritual", "Sikh Heritage", "History"], img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&q=80" },
    { name: "Shimla", state: "Himachal Pradesh", region: "north", type: "Hill Station", desc: "Former summer capital of British India. Colonial architecture, Mall Road, toy train rides and Himalayan views.", tags: ["Hill Station", "Colonial", "Scenic"], img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80" },
    { name: "Manali", state: "Himachal Pradesh", region: "north", type: "Adventure", desc: "Adventure hub in the Kullu Valley — Rohtang Pass, Solang Valley, skiing, trekking, paragliding and river rafting.", tags: ["Adventure", "Snow", "Trekking"], img: "https://images.unsplash.com/photo-1585016495481-91dff8146e75?w=600&q=80" },
    { name: "Nainital", state: "Uttarakhand", region: "north", type: "Hill Station", desc: "The Lake District of Uttarakhand. A jewel-like lake ringed by hills, with boating, cable cars, and viewpoints.", tags: ["Lakes", "Hill Station", "Nature"], img: "https://images.unsplash.com/photo-1676453507888-d5c7bf3cc94f?w=600&q=80" },
    { name: "Rishikesh & Haridwar", state: "Uttarakhand", region: "north", type: "Spiritual", desc: "Gateway to the Himalayas. Yoga capital of the world, Ganga Aarti at Haridwar and white-water rafting in Rishikesh.", tags: ["Spiritual", "Yoga", "Adventure"], img: "https://images.unsplash.com/photo-1591803885501-ea6f9e23c0ac?w=600&q=80" },
    { name: "Srinagar", state: "Jammu & Kashmir", region: "north", type: "Nature", desc: "Houseboat stays on Dal Lake, the Mughal gardens of Nishat and Shalimar, and the heaven-like Kashmir Valley.", tags: ["Lakes", "Gardens", "Scenic"], img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80" },
    { name: "Dharamshala", state: "Himachal Pradesh", region: "north", type: "Spiritual", desc: "Home of the Dalai Lama and Tibetan government in exile. McLeod Ganj, Tibetan culture, and Dhauladhar peaks.", tags: ["Spiritual", "Buddhist", "Mountains"], img: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=600&q=80" },

    // SOUTH
    { name: "Kerala Backwaters", state: "Kerala", region: "south", type: "Nature", desc: "Houseboat cruises through a network of lagoons, rivers, and lakes. Alleppey and Kumarakom are the gateways.", tags: ["Backwaters", "Houseboats", "Nature"], img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80" },
    { name: "Munnar", state: "Kerala", region: "south", type: "Hill Station", desc: "Rolling hills carpeted in emerald tea gardens. Eravikulam National Park and misty peaks rising above the clouds.", tags: ["Tea Gardens", "Wildlife", "Scenic"], img: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600&q=80" },
    { name: "Mysuru (Mysore)", state: "Karnataka", region: "south", type: "Heritage", desc: "India's second most visited monument — the Mysore Palace glows in 97,000 light bulbs during Dasara festival.", tags: ["Palaces", "Culture", "Festivals"], img: "https://images.unsplash.com/photo-1583468323330-9032ad490fed?w=600&q=80" },
    { name: "Hampi", state: "Karnataka", region: "south", type: "Heritage", desc: "UNESCO-listed ruins of the Vijayanagara Empire, scattered among giant boulders. An otherworldly landscape.", tags: ["UNESCO", "Ruins", "History"], img: "https://images.unsplash.com/photo-1600000000000-000000000000?w=600&q=80" },
    { name: "Mahabalipuram", state: "Tamil Nadu", region: "south", type: "Heritage", desc: "Ancient seaport with UNESCO-listed rock-cut temples, rathas, and the stunning Shore Temple on the Bay of Bengal.", tags: ["UNESCO", "Temples", "Beaches"], img: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=80" },
    { name: "Madurai", state: "Tamil Nadu", region: "south", type: "Spiritual", desc: "The temple city of south India. The Meenakshi Amman Temple's towering gopurams are among the most ornate in India.", tags: ["Temples", "Spiritual", "Culture"], img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80" },
    { name: "Coorg", state: "Karnataka", region: "south", type: "Nature", desc: "The Scotland of India — misty hills, sprawling coffee and spice plantations, and lush Western Ghats forests.", tags: ["Coffee", "Nature", "Hill Station"], img: "https://images.unsplash.com/photo-1573407628-5e5bc12c8d61?w=600&q=80" },
    { name: "Ooty", state: "Tamil Nadu", region: "south", type: "Hill Station", desc: "The Queen of Hills — Nilgiri mountain railway, botanical gardens, and cool breeze above the plains.", tags: ["Hill Station", "UNESCO Railway", "Gardens"], img: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=600&q=80" },
    { name: "Pondicherry", state: "Puducherry", region: "south", type: "Culture", desc: "French colonial charm meets Tamil tradition. Colourful buildings, seaside promenades, and Auroville nearby.", tags: ["French Heritage", "Beaches", "Culture"], img: "https://images.unsplash.com/photo-1588495122236-43cd5e53be3e?w=600&q=80" },
    { name: "Hyderabad", state: "Telangana", region: "south", type: "City", desc: "City of Pearls. Charminar, Golconda Fort, biryanis and the gleaming HITEC City — old and new in perfect chaos.", tags: ["Heritage", "Food", "City"], img: "https://vanshsehgal99.github.io/Indyatra-landing-page-/hydrbd.jpg" },
    { name: "Tirupati", state: "Andhra Pradesh", region: "south", type: "Spiritual", desc: "The most visited pilgrimage site in the world. The Venkateswara Temple atop Tirumala hills draws millions.", tags: ["Pilgrimage", "Temples", "Spiritual"], img: "https://images.unsplash.com/photo-1580492516014-4a28059a6a29?w=600&q=80" },
    { name: "Kochi (Cochin)", state: "Kerala", region: "south", type: "Culture", desc: "A port city shaped by Chinese, Portuguese, Dutch, and British influences. Fort Kochi, Chinese fishing nets.", tags: ["Heritage", "Culture", "Seafood"], img: "https://images.unsplash.com/photo-1580889240645-0a8cbcc5c4c2?w=600&q=80" },

    // EAST
    { name: "Kolkata", state: "West Bengal", region: "east", type: "City", desc: "City of Joy — Victoria Memorial, Howrah Bridge, Durga Puja and the intellectual and artistic capital of India.", tags: ["Heritage", "Culture", "Food"], img: "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80" },
    { name: "Darjeeling", state: "West Bengal", region: "east", type: "Hill Station", desc: "Toy train rides, 80+ tea estates, views of Kanchenjunga, and the sunrise from Tiger Hill over the Himalayas.", tags: ["Tea", "UNESCO Railway", "Mountains"], img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" },
    { name: "Kaziranga National Park", state: "Assam", region: "east", type: "Wildlife", desc: "Home to two-thirds of the world's one-horned rhinos. UNESCO World Heritage Site and tiger reserve.", tags: ["UNESCO", "Wildlife", "Safari"], img: "https://images.unsplash.com/photo-1571989074671-37549daef42e?w=600&q=80" },
    { name: "Bhubaneswar & Puri", state: "Odisha", region: "east", type: "Spiritual", desc: "City of temples meets sacred shores. Lingaraj Temple, Jagannath Temple and the divine Konark Sun Temple.", tags: ["Temples", "UNESCO", "Beaches"], img: "https://vanshsehgal99.github.io/Indyatra-landing-page-/odssa.jpg" },
    { name: "Sundarbans", state: "West Bengal", region: "east", type: "Wildlife", desc: "World's largest mangrove delta — UNESCO World Heritage Site, home to the Royal Bengal Tiger.", tags: ["UNESCO", "Wildlife", "Mangroves"], img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80" },
    { name: "Puri Beach", state: "Odisha", region: "east", type: "Beach", desc: "Famous for the Rath Yatra festival — one of the world's largest gatherings — and stunning beach along the Bay of Bengal.", tags: ["Beaches", "Festivals", "Spiritual"], img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
    { name: "Gangtok", state: "Sikkim", region: "east", type: "Nature", desc: "Himalayan capital with panoramic views of Kanchenjunga, Buddhist monasteries, and vibrant local culture.", tags: ["Mountains", "Monasteries", "Nature"], img: "https://images.unsplash.com/photo-1525920960100-50d9d26a9fe3?w=600&q=80" },

    // WEST
    { name: "Goa", state: "Goa", region: "west", type: "Beach", desc: "India's beach paradise. Golden sands, Portuguese churches, vibrant nightlife, and the best seafood in the country.", tags: ["Beaches", "Nightlife", "Heritage"], img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80" },
    { name: "Mumbai", state: "Maharashtra", region: "west", type: "City", desc: "The City of Dreams — Gateway of India, Marine Drive, Bollywood, street food and a skyline that never sleeps.", tags: ["City", "Bollywood", "Food"], img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80" },
    { name: "Ajanta & Ellora Caves", state: "Maharashtra", region: "west", type: "Heritage", desc: "UNESCO masterpieces — rock-cut Buddhist monasteries at Ajanta and multi-faith caves at Ellora spanning 2,000 years.", tags: ["UNESCO", "Caves", "Art"], img: "https://images.unsplash.com/photo-1581791535665-f23b58ce4a83?w=600&q=80" },
    { name: "Rann of Kutch", state: "Gujarat", region: "west", type: "Nature", desc: "The Great White Desert — an infinite salt flat that glows under the full moon during the Rann Utsav festival.", tags: ["Desert", "Festival", "Nature"], img: "https://images.unsplash.com/photo-1566055909643-a51b4271d55e?w=600&q=80" },
    { name: "Ahmedabad", state: "Gujarat", region: "west", type: "Heritage", desc: "India's first UNESCO World Heritage City. Sabarmati Ashram, intricately carved step-wells, and pols of the old city.", tags: ["UNESCO", "Heritage", "Gandhi"], img: "https://images.unsplash.com/photo-1626714894445-1f3bd5a0c1d0?w=600&q=80" },
    { name: "Lonavala & Mahabaleshwar", state: "Maharashtra", region: "west", type: "Hill Station", desc: "Western Ghats hill stations beloved by Mumbaikars — waterfalls, lush valleys, strawberries, and scenic viewpoints.", tags: ["Hill Station", "Monsoon", "Nature"], img: "https://images.unsplash.com/photo-1598136490929-292a0a7890c2?w=600&q=80" },
    { name: "Diu", state: "Daman & Diu", region: "west", type: "Beach", desc: "Quiet island paradise with Portuguese-era churches, pristine beaches, and a pace of life that feels centuries removed.", tags: ["Beaches", "Portuguese Heritage", "Relaxation"], img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
    { name: "Pune", state: "Maharashtra", region: "west", type: "Culture", desc: "Oxford of the East — vibrant, young and intellectual. Shaniwar Wada, Aga Khan Palace, thriving café culture.", tags: ["Culture", "History", "Food"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },

    // NORTH-EAST
    { name: "Tawang", state: "Arunachal Pradesh", region: "northeast", type: "Spiritual", desc: "India's highest monastery sits at 10,000 ft, surrounded by misty valleys. One of Asia's most serene destinations.", tags: ["Monasteries", "Mountains", "Buddhist"], img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" },
    { name: "Majuli Island", state: "Assam", region: "northeast", type: "Culture", desc: "World's largest river island on the Brahmaputra — a living Vaishnavite culture, mask-making, and birdlife.", tags: ["Culture", "Island", "Nature"], img: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=600&q=80" },
    { name: "Cherrapunji", state: "Meghalaya", region: "northeast", type: "Nature", desc: "One of the wettest places on Earth. Living root bridges, thundering waterfalls, and lush limestone caves.", tags: ["Waterfalls", "Nature", "Trekking"], img: "https://images.unsplash.com/photo-1609259510649-e9d9a49db4e5?w=600&q=80" },
    { name: "Shillong", state: "Meghalaya", region: "northeast", type: "Hill Station", desc: "Scotland of the East — Scotland-meets-India in rolling hills, waterfalls, and a vibrant live music culture.", tags: ["Hill Station", "Music", "Nature"], img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80" },
    { name: "Dzukou Valley", state: "Nagaland", region: "northeast", type: "Nature", desc: "Valley of flowers at 2,400m — seasonal blooms, dramatic ridgelines, and ancient Naga trails into the unknown.", tags: ["Trekking", "Flowers", "Nature"], img: "https://images.unsplash.com/photo-1554701886-8c45eda20a07?w=600&q=80" },
    { name: "Ziro Valley", state: "Arunachal Pradesh", region: "northeast", type: "Culture", desc: "UNESCO Tentative Heritage Site — home of the Apatani tribe, rice fields, and the acclaimed Ziro Music Festival.", tags: ["UNESCO", "Tribal Culture", "Music"], img: "https://images.unsplash.com/photo-1627786177765-c29d2c01d2ae?w=600&q=80" },
    { name: "Imphal", state: "Manipur", region: "northeast", type: "Culture", desc: "WWII battlegrounds, Loktak Lake, the Ima Keithel — world's only all-women market — and Manipuri dance forms.", tags: ["WWII History", "Culture", "Lakes"], img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&q=80" },

    // CENTRAL
    { name: "Khajuraho", state: "Madhya Pradesh", region: "central", type: "Heritage", desc: "UNESCO-listed temples with exquisitely carved erotic sculptures — a philosophical treatise in stone on life's pleasures.", tags: ["UNESCO", "Temples", "Art"], img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80" },
    { name: "Sanchi Stupa", state: "Madhya Pradesh", region: "central", type: "Heritage", desc: "India's oldest stone structure — a UNESCO-listed Buddhist stupa complex built by Emperor Ashoka in the 3rd century BC.", tags: ["UNESCO", "Buddhist", "History"], img: "https://images.unsplash.com/photo-1583149577727-a7b7b75c9572?w=600&q=80" },
    { name: "Bandhavgarh National Park", state: "Madhya Pradesh", region: "central", type: "Wildlife", desc: "Highest density of Bengal tigers in India. Jeep safaris through thick sal forests and ancient hilltop fort ruins.", tags: ["Tigers", "Safari", "Wildlife"], img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80" },
    { name: "Pench & Kanha Tiger Reserve", state: "Madhya Pradesh", region: "central", type: "Wildlife", desc: "Inspiration for Kipling's Jungle Book. Dense forests, meadows, and some of India's highest tiger sighting rates.", tags: ["Tigers", "Safari", "Nature"], img: "https://images.unsplash.com/photo-1535083783855-adeab27d2c63?w=600&q=80" },
    { name: "Bhopal", state: "Madhya Pradesh", region: "central", type: "Culture", desc: "City of Lakes with a blend of Mughal, British, and tribal heritage. Bhojpur temples, Van Vihar, and Bharat Bhavan.", tags: ["Lakes", "Heritage", "Culture"], img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80" },
    { name: "Orchha", state: "Madhya Pradesh", region: "central", type: "Heritage", desc: "Abandoned Bundela capital — magnificent palaces and temples reflected in the Betwa River at golden hour.", tags: ["Palaces", "History", "Nature"], img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80" },

    // ISLANDS
    { name: "Andaman Islands", state: "Andaman & Nicobar", region: "islands", type: "Beach", desc: "Pristine tropical paradise — Radhanagar Beach, Cellular Jail, glass-clear waters, diving and snorkelling in coral reefs.", tags: ["Beaches", "Diving", "Islands"], img: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?w=600&q=80" },
    { name: "Havelock Island", state: "Andaman & Nicobar", region: "islands", type: "Beach", desc: "Asia's best beaches — Radhanagar beach, turquoise sea turtles, pristine coral gardens, and barefoot luxury.", tags: ["Beaches", "Snorkelling", "Nature"], img: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=600&q=80" },
    { name: "Lakshadweep", state: "Lakshadweep", region: "islands", type: "Beach", desc: "India's hidden gem — 36 coral islands, crystal-clear lagoons, and some of the finest diving spots in Asia.", tags: ["Coral", "Diving", "Pristine"], img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" },
  ];

  let currentRegion = 'all';
  let currentSearch = '';

  function renderCards(list) {
    const grid = document.getElementById('exploreGrid');
    const empty = document.getElementById('exploreEmpty');
    const count = document.getElementById('destCount');

    if (list.length === 0) {
      grid.innerHTML = '';
      empty.style.display = 'block';
      count.textContent = '0 destinations';
      return;
    }

    empty.style.display = 'none';
    count.textContent = `${list.length} destination${list.length !== 1 ? 's' : ''}`;

    grid.innerHTML = list.map((d, i) => `
      <div class="exp-card" style="animation-delay:${i * 0.04}s">
        <div class="exp-img-wrap">
          <img src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80'">
          <span class="exp-region-badge">${regionLabel(d.region)}</span>
          <span class="exp-type-badge">${d.type}</span>
        </div>
        <div class="exp-body">
          <div class="exp-state">${d.state}</div>
          <div class="exp-name">${d.name}</div>
          <div class="exp-desc">${d.desc}</div>
          <div class="exp-tags">${d.tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');
  }

  function regionLabel(r) {
    return { north:'North India', south:'South India', east:'East India', west:'West India', northeast:'North-East', central:'Central India', islands:'Islands' }[r] || r;
  }

  function filterDestinations() {
    currentSearch = document.getElementById('exploreSearch').value.toLowerCase().trim();
    applyFilters();
  }

  function setRegion(region, btn) {
    currentRegion = region;
    document.querySelectorAll('.rtab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  }

  function applyFilters() {
    let filtered = destinations;
    if (currentRegion !== 'all') {
      filtered = filtered.filter(d => d.region === currentRegion);
    }
    if (currentSearch) {
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(currentSearch) ||
        d.state.toLowerCase().includes(currentSearch) ||
        d.desc.toLowerCase().includes(currentSearch) ||
        d.tags.some(t => t.toLowerCase().includes(currentSearch))
      );
    }
    renderCards(filtered);
  }

  // Initial render
  renderCards(destinations);
